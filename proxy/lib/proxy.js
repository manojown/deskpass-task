const http = require("http");
const EE3 = require("events");

function ProxyServer(client_req, client_res, option) {
	this.client_req = client_req;
	this.client_res = client_res;
	this.beforeCallbacks = [];
	this.afterCallbacks = [];

	this.run = async() => {
		try {
			var options = {
				...option,
				path: this.client_req.url,
				method: this.client_req.method,
				headers: this.client_req.headers,
				body: this.client_req.body,
			};

			await this.processBefore(this.beforeCallbacks, this.client_req, this.client_res);

			this.proxy = http.request(options, async (response) => {
				await this.processAfter(this.afterCallbacks, response);
				this.client_res.writeHead(response.statusCode, response.headers);
				response.pipe(this.client_res, {
					end: true,
				});
			});

			this.client_req.pipe(this.proxy, {
				end: true,
			});
		} catch (e) {
			console.log("e::::::::::::",e)
			this.emit("error", e.message);
			this.client_res.end(e.message);
		}
	};
	setTimeout(() => this.run,0)
	return this;
}

require("util").inherits(ProxyServer, EE3);

ProxyServer.prototype.before = function (callback) {
	if (typeof callback === "function") {
		this.beforeCallbacks.push(callback);
	} else if (Array.isArray(callback)) {
		this.beforeCallbacks.push(...callback);
	} else {
		throw new Error("callback should be function.");
	}
};
ProxyServer.prototype.after = function (callback) {
	if (typeof callback === "function") {
		this.afterCallbacks.push(callback);
	} else if (Array.isArray(callback)) {
		this.afterCallbacks.push(...callback);
	} else {
		throw new Error("callback should be function.");
	}
};

// Using for loop because all synthetic events default in async mode
ProxyServer.prototype.processAfter = async (afterCallbacks, response) => {
	try {
		for (let callback of afterCallbacks) {
			await callback(response);
		}
	} catch (e) {
		console.log("e", e);

		throw new Error("Failed while process After hook : "+e.message);
	}
};

// Using for loop because all synthetic events default in async mode
ProxyServer.prototype.processBefore = async (beforeCallbacks, req, res) => {
	try {
		for (let callback of beforeCallbacks) {
			await callback(req, res);
		}
	} catch (e) {
		console.log("e", e);
		throw new Error("Failed while process Before hook : "+e.message);
	}
};
// let aa = new ProxyServer()
// console.log("asdas===",aa.before)
module.exports = ProxyServer;
