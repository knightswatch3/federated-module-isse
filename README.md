# federated-module-issue


How to start ? 

1. Clone the repo.
2. Ensure you have pnpm (8.14.1) and node(v20.11.1).
3. cd into app1 and run pnpm run-app1 after pnpm install
4. cd into app2 and run pnpm run-app2 after pnpm install
5. This will spin up both the apps.

6. App1 Serves the remote module on 5001 as configured:

![image](https://github.com/knightswatch3/federated-module-isse/assets/9092073/481c6567-0e07-4b8a-bc2d-b2a9fbe6c90b)


7. App2 Serves the html for the react code composed.
   ![image](https://github.com/knightswatch3/federated-module-isse/assets/9092073/d5429369-c5ee-4444-9976-6bb57253df3d)

8. **Issue :**

   a. Loaded remote module from app1 is undefined. I am unable to use any of the store methods app1 is exporting via remote module.
   b. I have a similar issue with another app (not in the repo currently ) which exposes a react component called <Auth/> which when I import and use in the index.tsx of app2 I run into

   ```
      Error.tsx:45 Error: ScriptExternalLoadError: Loading script failed.
      (missing: http://localhost:3002/remoteEntry2.js)
      while loading "./src" from webpack/container/reference/authremote
      remote authremote/Auth 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
      external "authremote@http://localhost:5002/remoteEntry2.js" 42 bytes [built] [code generated]
   ```

   I believe these two are inter-related and solving the first(8.a) will result in a fix for the other. 

