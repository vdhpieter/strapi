"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4981],{2160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(4848),l=n(8453),s=n(4443);const i={title:"Telemetry Service",slug:"/api/Telemetry",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:3},a="Telemetry",d={id:"api/telemetry",title:"Telemetry Service",description:"Current state: Stable",source:"@site/docs/api/telemetry.mdx",sourceDirName:"api",slug:"/api/Telemetry",permalink:"/api/Telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/api/telemetry.mdx",tags:[{label:"module",permalink:"/tags/module"},{label:"public",permalink:"/tags/public"}],version:"current",frontMatter:{title:"Telemetry Service",slug:"/api/Telemetry",tags:["module","public"],toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"api",previous:{title:"Strapi server (WIP)",permalink:"/api/strapi-server"}},o={},c=[{value:"Usage Information",id:"usage-information",level:2},{value:"Module: Telemetry Service",id:"module-telemetry-service",level:2},{value:"createTelemetryInstance()",id:"createtelemetryinstance",level:3},{value:"Examples",id:"examples",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>telemetry.register()</code>",id:"telemetryregister",level:3},{value:"Examples",id:"examples-1",level:4},{value:"<code>telemetry.bootstrap()</code>",id:"telemetrybootstrap",level:3},{value:"Examples",id:"examples-2",level:4},{value:"<code>telemetry.destroy()</code>",id:"telemetrydestroy",level:3},{value:"Examples",id:"examples-3",level:4},{value:"<code>telemetry.send(event, payload)</code>",id:"telemetrysendevent-payload",level:3},{value:"Examples",id:"examples-4",level:4},{value:"Types",id:"types",level:2},{value:"<code>TelemetryPayload</code>",id:"telemetrypayload",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"telemetry",children:"Telemetry"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Current state: ",(0,r.jsx)(t.strong,{children:"Stable"})]})}),"\n",(0,r.jsx)(t.p,{children:"The telemetry service is responsible for collecting and sending anonymous usage data to Strapi. This service is disabled by default, but can be enabled or disabled via configuration."}),"\n",(0,r.jsx)(t.h2,{id:"usage-information",children:"Usage Information"}),"\n",(0,r.jsx)(t.p,{children:"The collected usage data is used to help Strapi improve the product by identifying areas of improvement, tracking feature adoption, and measuring performance. You can learn more about the usage data that is collected by visiting the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/getting-started/usage-information.html",children:"https://docs.strapi.io/developer-docs/latest/getting-started/usage-information.html"})}),"\n",(0,r.jsx)(t.h2,{id:"module-telemetry-service",children:"Module: Telemetry Service"}),"\n",(0,r.jsx)(t.h3,{id:"createtelemetryinstance",children:"createTelemetryInstance()"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["strapi: ",(0,r.jsx)(t.a,{href:"Strapi",children:(0,r.jsx)(s.A,{children:"Strapi"})})," - A strapi instance."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"createTelemetryInstance()"})," function returns an instance of the Telemetry service."]}),"\n",(0,r.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const createTelemetryInstance = require('path/to/telemetry');\n\nconst telemetry = createTelemetryInstance(strapi);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"telemetryregister",children:(0,r.jsx)(t.code,{children:"telemetry.register()"})}),"\n",(0,r.jsx)(t.p,{children:"Registers the telemetry instance."}),"\n",(0,r.jsx)(t.h4,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"telemetry.register();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"telemetrybootstrap",children:(0,r.jsx)(t.code,{children:"telemetry.bootstrap()"})}),"\n",(0,r.jsx)(t.p,{children:"Bootstraps the telemetry instance."}),"\n",(0,r.jsx)(t.h4,{id:"examples-2",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"telemetry.bootstrap();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"telemetrydestroy",children:(0,r.jsx)(t.code,{children:"telemetry.destroy()"})}),"\n",(0,r.jsx)(t.p,{children:"Destroys the telemetry instance."}),"\n",(0,r.jsx)(t.h4,{id:"examples-3",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"telemetry.destroy();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"telemetrysendevent-payload",children:(0,r.jsx)(t.code,{children:"telemetry.send(event, payload)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"event"}),": ",(0,r.jsx)(s.A,{children:"String"})," - The event to be sent."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"payload"}),": ",(0,r.jsx)(t.a,{href:"#telemetrypayload",children:(0,r.jsx)(s.A,{children:"TelemetryPayload"})})," - The payload to be sent with the event."]}),"\n",(0,r.jsx)(t.li,{children:"Returns: Promise"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Sends telemetry event with the given payload."}),"\n",(0,r.jsx)(t.h4,{id:"examples-4",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"telemetry.send('event_name', { key: 'value' });\n"})}),"\n",(0,r.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.h3,{id:"telemetrypayload",children:(0,r.jsx)(t.code,{children:"TelemetryPayload"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(s.A,{children:"Object"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"eventProperties"}),": ",(0,r.jsx)(s.A,{children:"Object"})," An object that contains additional information about the event."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"userProperties"}),": ",(0,r.jsx)(s.A,{children:"Object"})," An object that defines the identity of the user who triggered the event."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"groupProperties"}),": ",(0,r.jsx)(s.A,{children:"Object"})," An object that defines properties of the application or environment in which the event occurred."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Examples of event properties in Strapi include model, containsRelationalFields, displayedFields, kind, and hasDraftAndPublish. These properties are specific to the event and are used to provide additional context about what happened."}),"\n",(0,r.jsx)(t.p,{children:"User properties can include information such as the user's operating system, node version, and hostname. These properties are typically used to group events by user or to filter events based on certain user characteristics."}),"\n",(0,r.jsx)(t.p,{children:"Group properties can include information such as the language(s) used in the application, the database being used, and the number of locales. These properties are typically used to group events by application version, environment, or other characteristics."})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4443:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4848);function l(e){let{children:t}=e;return(0,r.jsxs)("span",{style:{color:"#017501"},children:["<",t,">"]})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const l={},s=r.createContext(l);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);