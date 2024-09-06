"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8884],{4371:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=i(4848),t=i(8453);const o={title:"plugin:watch",description:"An in depth look at the plugin:watch command of the Strapi CLI",tags:["CLI","commands","plugins","building"]},a=void 0,c={id:"docs/core/strapi/commands/plugin/watch",title:"plugin:watch",description:"An in depth look at the plugin:watch command of the Strapi CLI",source:"@site/docs/docs/01-core/strapi/commands/plugin/02-watch.md",sourceDirName:"docs/01-core/strapi/commands/plugin",slug:"/docs/core/strapi/commands/plugin/watch",permalink:"/docs/core/strapi/commands/plugin/watch",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/strapi/commands/plugin/02-watch.md",tags:[{label:"CLI",permalink:"/tags/cli"},{label:"commands",permalink:"/tags/commands"},{label:"plugins",permalink:"/tags/plugins"},{label:"building",permalink:"/tags/building"}],version:"current",sidebarPosition:2,frontMatter:{title:"plugin:watch",description:"An in depth look at the plugin:watch command of the Strapi CLI",tags:["CLI","commands","plugins","building"]},sidebar:"docs",previous:{title:"plugin:build",permalink:"/docs/core/strapi/commands/plugin/build"},next:{title:"plugin:init",permalink:"/docs/core/strapi/commands/plugin/init"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"How it works",id:"how-it-works",level:2}];function r(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"plugin:watch"})," command is used to watch plugin source files and compile them to production viable assets in real-time.\nThis is done by using ",(0,s.jsx)(n.code,{children:"pack-up"})," underneath and a specific configuration, for this command we ",(0,s.jsx)(n.em,{children:"do not"})," look for a ",(0,s.jsx)(n.code,{children:"packup.config"})," file."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"strapi plugin:watch\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Watch & compile your strapi plugin for local development.\n\nOptions:\n  -d, --debug  Enable debugging mode with verbose logs (default: false)\n  --silent     Don't log anything (default: false)\n  -h, --help   Display help for command\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(n.p,{children:"The command sequence can be visualised as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Load package.json"}),"\n",(0,s.jsxs)(n.li,{children:["Validate that package.json against a ",(0,s.jsx)(n.code,{children:"yup"})," schema"]}),"\n",(0,s.jsxs)(n.li,{children:["Validate the ordering of an export map if ",(0,s.jsx)(n.code,{children:"pkg.exports"})," is defined"]}),"\n",(0,s.jsxs)(n.li,{children:['Create a set of "bundles" to build ignoring the package.json exports map that is ',(0,s.jsx)(n.em,{children:"specifically"})," set up for strapi-plugins."]}),"\n",(0,s.jsxs)(n.li,{children:["Pass the created config to ",(0,s.jsx)(n.code,{children:"pack-up"}),"'s watch API."]}),"\n",(0,s.jsx)(n.li,{children:"Run's indefinitely"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);