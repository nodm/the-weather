[![Build Status](https://travis-ci.com/nodm/the-weather.svg?branch=master)](https://travis-ci.com/nodm/the-weather)


# ![logo](src/assets/icons/icon-32x32.png) theWeather

This project is a [Progressive Web Application](https://en.wikipedia.org/wiki/Progressive_web_application) (also known as a PWA) built with [Angular](https://angular.io).

You can check the weather forecast for your current location or for a set of predefined locations, including Kyiv and some cities in Scandinavia.

You can get the application with the [link](https://nodm.github.io/the-weather). You can install and place it on a home screen on Android, iOS, MacOS, Linux and Windows.  

**theWeather** app checks for updates, notifies user and asks for installation. So you could always use the latest version.

## Development

### [Prerequisites]
* register on [Dark Sky](https://darksky.net/dev) website to get a secret API key (trial account allows up to 1,000 free calls per day to evaluate the Dark Sky API)
* generate a VAPID (VAPID stands for **V**oluntary **A**pplication **S**erver **I**dentification for Web Push protocol) key pair:
```shell script
npm i -g web-push
web-push generate-vapid-keys --json
```
A VAPID key pair looks like:
```json
{
  "publicKey":"BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo",
  "privateKey":"PkVHOUKgY29NM7myQXXoGbp_bH_9j-cxW5cO-fGcSsA"
}
```

Replace `<YOUR_DARK_SKY_API_KEY>` with your secret API key and `<YOUR_VAPID_PUBLIC_KEY>` with VAPID's public key in file `src/app/shared/services/app-config.service.ts`

### Application development without service worker support
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### PWA Application development

Because `ng serve` does not work with service workers, you must use a separate HTTP server to test your project locally.
You can use any HTTP server (for example [serve](https://github.com/zeit/serve), [http-server](https://www.npmjs.com/package/http-server) etc. ).
I prefer the [http-server](https://www.npmjs.com/package/http-server) package from 'npm'. To reduce the possibility of
conflicts and avoid serving stale content, test on a dedicated port and disable caching.

To run the application with service worker support run the following commands:
* build the app in a **production** mode
```shell script
ng build --prod
```
* serve the directory containing your web files with **http-server**
```shell script
http-server -c-1 -p 8080 --proxy http://localhost dist/the-weather
```
* navigate to `http://localhost:8080`

>In order for service workers to be registered, the app must be accessed over HTTPS, not HTTP. Browsers ignore service workers on pages that are served over an
insecure connection. The reason is that service workers are quite powerful, so extra care needs to be taken to ensure the service worker script has not been tampered with.
There is one exception to this rule: to make local development easier, browsers do not require a secure connection when accessing an app on localhost.
([Angular Service Workers & PWA](https://angular.io/guide/service-worker-getting-started#serving-with-http-server))

### Web Push Notifications

To test Web Push Notifications you should run a [server](https://github.com/nodm/the-weather-service).

Clone the repo, copy `src/app-config.json.dist` to `src/app-config.json` and replace:
* `port` with `80`,
* `< Your VAPID public key>` with a VAPID public key, generated in [Prerequisites](#prerequisites) section,
* `< Your VAPID private key >`  with a VAPID private key, generated in [Prerequisites](#prerequisites) section,`
* `< Your email >` with your email address,
* `< You DarkSky API key >` with a VAPID private key, generated in [Prerequisites](#prerequisites) section,`

Run the server with a command:
```shell script
node start
```

Now you can send and receive Web Push notifications!

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Useful links
1. [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
2. [Your first Progressive Web App](https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0) codelab by Google.
3. [The Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest)
4. [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members) on `developer.mozilla.org`
5. [The Basics of Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/)
6. [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
7. [Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/) by Jake Archibald
8. [Angular Service Worker & PWA](https://angular.io/guide/service-worker-intro)
9. [Service Workers & Angular](https://medium.com/bratislava-angular/service-workers-angular-3c1551f0c203) by Martin Džejky Jakubik, Bratislava Angular
10. [Service Workers - Practical Guided Introduction (several examples)](https://blog.angular-university.io/service-workers/) by Angular University
11. [Angular Service Worker - Step-By-Step Guide for turning your Application into a PWA](https://blog.angular-university.io/angular-service-worker/) by Angular University
12. [Angular Push Notifications: a Complete Step-by-Step Guide](https://blog.angular-university.io/angular-push-notifications/) by Angular University
13. [How to Cache HTTP Requests in an Angular App (PWA)](https://christianlydemann.com/how-to-cache-http-requests-in-an-angular-pwa/) by CHRISTIAN LÜDEMANN
14. [The Beginners Guide to Service Workers and Angular](https://blog.ng-book.com/service-workers-and-angular/) Martin Jakubík
15. [Web PUSH Notifications быстро и просто](https://habr.com/ru/post/321924/)
16. [Beginners guide to Web Push Notifications using Service Workers](https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679)
17. [Web Push Book](https://web-push-book.gauntface.com/)
18. [Convert any site to an App – Progressive Web App](https://dev.to/tomavelev/convert-any-site-to-an-app-progressive-web-app-4e3d) (intercept installation prompt)
19. [Advanced angular 7 PWA tutorial ( Part -1)](https://www.youtube.com/watch?v=f26hgzyGdHM)
20. [Angular Service Worker Tutorial](https://www.youtube.com/watch?v=5YtNQJQu31Y)
