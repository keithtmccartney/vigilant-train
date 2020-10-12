# vigilant-train
[CodAffection] Angular 10 CRUD with ASP.NET Core Web API

Grab the article at [https://www.codaffection.com/asp-net-core-article/angular-crud-with-asp-net-core-web-api](https://www.codaffection.com/asp-net-core-article/angular-crud-with-asp-net-core-web-api)

## Tips/Run

* Run: "npm install";
* Run: "ng serve --o";

## Errors Experienced

* [UPDATE: this was corrected by applying the attribute "ToastrModule.forRoot()" to the importing of the Toastr module] Toastr package was initially not included within the tutorial and needed both adding to the project ("npm install ngx-toastr --save") and declaring within the constructor; on serving I was dealt with the following: "core.js:4352 ERROR NullInjectorError: R3InjectorError(AppModule)[ToastrService -> InjectionToken ToastConfig -> InjectionToken ToastConfig -> InjectionToken ToastConfig]: NullInjectorError: No provider for InjectionToken ToastConfig!";
* The BrowserAnimationModule needed to be commented-out as it's playing havoc with the latest Angular version's Ivy compiler;

## Notes:

* The Ivy compiler is still in a rough place and targeting a previous version of Angular is advised;

## What's it all about?

* In this article, we’ll implement Asp.Net Core 3.1 Web API CRUD Operations with Angular 10. To demonstrate the topic, we’ll build a project from scratch with payment details like credit/ debit card;

## Thanks

Thanks goes out to CodAffection for the FREE stuff!

* [CodAffection's site](https://www.codaffection.com/) ...Abc...
