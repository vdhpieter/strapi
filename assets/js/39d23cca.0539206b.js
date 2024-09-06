"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5059],{2716:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),n=t(8453);const o={title:"Source",tags:["providers","data-transfer","experimental"]},s="Strapi File Source Provider",a={id:"docs/core/data-transfer/providers/strapi-file/source",title:"Source",description:"This provider will open and read a Strapi Data File as a data source.",source:"@site/docs/docs/01-core/data-transfer/02-providers/03-strapi-file/02-source.md",sourceDirName:"docs/01-core/data-transfer/02-providers/03-strapi-file",slug:"/docs/core/data-transfer/providers/strapi-file/source",permalink:"/docs/core/data-transfer/providers/strapi-file/source",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/data-transfer/02-providers/03-strapi-file/02-source.md",tags:[{label:"providers",permalink:"/tags/providers"},{label:"data-transfer",permalink:"/tags/data-transfer"},{label:"experimental",permalink:"/tags/experimental"}],version:"current",sidebarPosition:2,frontMatter:{title:"Source",tags:["providers","data-transfer","experimental"]},sidebar:"docs",previous:{title:"Strapi File Structure",permalink:"/docs/core/data-transfer/providers/strapi-file/file-structure"},next:{title:"Destination",permalink:"/docs/core/data-transfer/providers/strapi-file/destination"}},d={},c=[{value:"Provider Options",id:"provider-options",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"strapi-file-source-provider",children:"Strapi File Source Provider"}),"\n",(0,i.jsx)(r.p,{children:"This provider will open and read a Strapi Data File as a data source."}),"\n",(0,i.jsx)(r.h2,{id:"provider-options",children:"Provider Options"}),"\n",(0,i.jsxs)(r.p,{children:["The accepted options are defined in ",(0,i.jsx)(r.code,{children:"ILocalFileSourceProviderOptions"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"  file: {\n    path: string; // the file to load\n  };\n\n  encryption: {\n    enabled: boolean; // if the file is encrypted (and should be decrypted)\n    key?: string; // the key to decrypt the file\n  };\n\n  compression: {\n    enabled: boolean; // if the file is compressed (and should be decompressed)\n  };\n"})}),"\n",(0,i.jsx)(r.p,{children:'Note: When the Strapi CLI attempts to import a file, the options for compression and encryption are set based on the extension of the file being loaded, eg a file with the .gz extension will have the "compress" option set, and a file that includes the .enc extension will have the "encrypt" option set.'}),"\n",(0,i.jsx)(r.p,{children:"When using the transfer engine programmatically, you may make the determination whether the file being loaded should be decrypted or compressed by setting\nthose options."})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var i=t(6540);const n={},o=i.createContext(n);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);