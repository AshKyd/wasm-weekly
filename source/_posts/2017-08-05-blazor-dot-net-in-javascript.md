title: Blazor & .NET running in the browser
date: 2017-08-05 02:10:20
tags: demos
author: ashkyd
description: When can we run .NET in the browser? Steve Sanderson suggests “soon”.
---
One of the things I've been saying from the inception of wasm is that I can see tools like Visual Studio building to WebAssembly as a big integrated thing. Well, that could be one step closer with Steve Sanderson's experimental Blazor UI framework that runs [.NET Razor](https://en.wikipedia.org/wiki/ASP.NET_Razor) code in the browser.

While Sanderson takes pains to assert that this is experimental, it's a good test cases for what a .NET app in WebAssembly might look like:

> Yes, it could be practical. A "hello world" app that runs Razor in the browser with this template is around 300KB, which is smaller than typical apps from some other single-page-app (SPA) frameworks. That 300KB includes everything: the small .NET runtime, core libraries, application code, and wrapper libraries needed to bootstrap and interop with the WebAssembly code.

You can dive into the [Blazor code on GitHub](https://github.com/SteveSanderson/Blazor), or [watch the presentation on Youtube](https://www.youtube.com/watch?v=MiLAE6HMr10).

<div class="video-ratio"><div><iframe class="youtube" src="https://www.youtube.com/embed/MiLAE6HMr10" allowfullscreen></iframe></div></div>
