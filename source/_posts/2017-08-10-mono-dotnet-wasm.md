title: Mono project working on wasm build
date: 2017-08-10 18:56:49
tags:
description: If you're not a C or Rust guru, could Mono's .NET implementation be for you?
---
One of the things I've been saying from the inception of wasm is that I can see tools like Visual Studio building to WebAssembly as a big integrated thing, giving non-Javascript developers more familiar tools to work with in-browser.

Joining [Blazor's efforts to get .NET code running in-browser](/2017-08-05/blazor-dot-net-in-javascript/) with DotNetAnywhere,
Miguel de Icaza blogged yesterday that the Mono project can now also be compiled to
WebAssembly, and used to run C# and F# in the browser.

The Mono implementation is interesting in that it can run either compiled or
interpreted .NET code depending on the use case.

> The first one uses the traditional full static compilation mode of Mono, this compiled both the Mono C runtime and the Mono class libraries along with the user code into WebAssembly code. It produces one large statically compiled application.
>
> The second prototype compiles the Mono C runtime into web assembly, and then uses Mono’s IL interpreter to run managed code. This one is a smaller download, but comes at the expense of performance.

[Scott Hanselman](https://www.hanselman.com/blog/NETAndWebAssemblyIsThisTheFutureOfTheFrontend.aspx) has written more about what this might mean for the .NET ecosystem, concluding “At this point it's clear that everyone is prototyping and hacking and enjoying themselves.”

You can [read the original post on the Mono site](http://www.mono-project.com/news/2017/08/09/hello-webassembly/).
