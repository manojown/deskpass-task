# what next

Docker container and  Kubernetes and serverless are already an old topic because they are already part of mainstream handling, there is lots of improvement going on in sense of tooling.



## Next level of server abstraction will look like in 10 years -
   All of these tools like Docker, Kubernetes ( to handle orchestration ), and serverless trying to solve scaling issues and there are lots of improvements still pending likewise 
   **Serverless**
    1. Serverless throttle limit - in the future to extend
    2. serverless usage Amazone Linux image, moreover In future might switch to universal solution to reduce image size, secure and fast deploy.
    **Docker**
    1. Lightweight container image, few solutions already there but still improvement in the area of memory usage.
    
 All the pod's deployment is handling with a config file but in the future, it will be controlled with Artificial intelligence operations.
1. [Unikernels](http://unikernel.org/) -
           Unikernels put everything required to run an application (including operating system libraries) into a portable package, and they exclude everything else. In other words, a Unikernel contains only the very specific bits of code required to run a specific application. That makes them even lighter-weight and more secure than Docker containers.
        
2. Artificial intelligence operations
     https://towardsdatascience.com/machine-learning-models-as-micro-services-in-docker-a798e1f068a5
3. PASS - ( platform as a service ) 
    This solution is already there in the form for Knative, Fargate, EKS.
    
## How will web apps be deployed and managed a decade from now?
 As a deployment part, I think the process is already smooth because of CI-CD pipeline integration, you just need to push your code to the respective repo and it's run out of the box, therefore is not enough room to improve but still configuration part will reduce drastically. 
 As a orchestration is the remain same to manage all the app, but might in future new service available where you just need to deploy your app and, another part handle by the PASS ( platform as a service provider )( EKS, KNative, Fargate ) 

## Will container management systems such as Kubernetes still be used - 
  Yes, I think, cloud-native technology which we gonna discuss won’t be intended to replace existing infra completely but they extend the current one, it will be an incremental improvement over the existing one.
    
    
## what the actual changes we might be a part of - 
### In the next 10 years, below mentioned technology will change for sure - 
1.  Modify Kernal - current existing kernel are not intended to build for scaling and decade old
    **Issues** - 
    *  Handing network call with FD( file descriptor) is not up to the mark solution ([Example](https://jvns.ca/blog/2017/06/03/async-io-on-linux--select--poll--and-epoll/))
    *  Single machine can handle more traffic than they used to with hardware and kernel tweaks. (old solution not timely optimized)
    *  Virtual thread-based control, example - GoLang solve that issue with go scheduler  (just an abstraction over Hypervisor thread)
