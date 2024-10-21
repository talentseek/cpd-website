"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{875:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(9205).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},7407:function(e,r,t){t.d(r,{UQ:function(){return ea},vF:function(){return el},Qd:function(){return eo},o4:function(){return ei}});var n=t(7437),a=t(2265),o=t(3966),i=t(9863),l=t(8575),d=t(6741),s=t(886),c=t(6840),u=t(1188),f=t(1599),p=t(9255),m="Collapsible",[x,h]=(0,o.b)(m),[v,b]=x(m),w=a.forwardRef((e,r)=>{let{__scopeCollapsible:t,open:o,defaultOpen:i,disabled:l,onOpenChange:d,...u}=e,[f=!1,m]=(0,s.T)({prop:o,defaultProp:i,onChange:d});return(0,n.jsx)(v,{scope:t,disabled:l,contentId:(0,p.M)(),open:f,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),children:(0,n.jsx)(c.WV.div,{"data-state":R(f),"data-disabled":l?"":void 0,...u,ref:r})})});w.displayName=m;var y="CollapsibleTrigger",g=a.forwardRef((e,r)=>{let{__scopeCollapsible:t,...a}=e,o=b(y,t);return(0,n.jsx)(c.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":R(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...a,ref:r,onClick:(0,d.M)(e.onClick,o.onOpenToggle)})});g.displayName=y;var N="CollapsibleContent",j=a.forwardRef((e,r)=>{let{forceMount:t,...a}=e,o=b(N,e.__scopeCollapsible);return(0,n.jsx)(f.z,{present:t||o.open,children:e=>{let{present:t}=e;return(0,n.jsx)(C,{...a,ref:r,present:t})}})});j.displayName=N;var C=a.forwardRef((e,r)=>{let{__scopeCollapsible:t,present:o,children:i,...d}=e,s=b(N,t),[f,p]=a.useState(o),m=a.useRef(null),x=(0,l.e)(r,m),h=a.useRef(0),v=h.current,w=a.useRef(0),y=w.current,g=s.open||f,j=a.useRef(g),C=a.useRef();return a.useEffect(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=m.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();h.current=r.height,w.current=r.width,j.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),p(o)}},[s.open,o]),(0,n.jsx)(c.WV.div,{"data-state":R(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!g,...d,ref:x,style:{"--radix-collapsible-content-height":v?"".concat(v,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:g&&i})});function R(e){return e?"open":"closed"}var A=t(9114),k="Accordion",_=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[I,D,T]=(0,i.B)(k),[O,W]=(0,o.b)(k,[T,h]),E=h(),V=a.forwardRef((e,r)=>{let{type:t,...a}=e;return(0,n.jsx)(I.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,n.jsx)(S,{...a,ref:r}):(0,n.jsx)(P,{...a,ref:r})})});V.displayName=k;var[Z,F]=O(k),[H,M]=O(k,{collapsible:!1}),P=a.forwardRef((e,r)=>{let{value:t,defaultValue:o,onValueChange:i=()=>{},collapsible:l=!1,...d}=e,[c,u]=(0,s.T)({prop:t,defaultProp:o,onChange:i});return(0,n.jsx)(Z,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:u,onItemClose:a.useCallback(()=>l&&u(""),[l,u]),children:(0,n.jsx)(H,{scope:e.__scopeAccordion,collapsible:l,children:(0,n.jsx)(q,{...d,ref:r})})})}),S=a.forwardRef((e,r)=>{let{value:t,defaultValue:o,onValueChange:i=()=>{},...l}=e,[d=[],c]=(0,s.T)({prop:t,defaultProp:o,onChange:i}),u=a.useCallback(e=>c(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...r,e]}),[c]),f=a.useCallback(e=>c(function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.filter(r=>r!==e)}),[c]);return(0,n.jsx)(Z,{scope:e.__scopeAccordion,value:d,onItemOpen:u,onItemClose:f,children:(0,n.jsx)(H,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(q,{...l,ref:r})})})}),[z,U]=O(k),q=a.forwardRef((e,r)=>{let{__scopeAccordion:t,disabled:o,dir:i,orientation:s="vertical",...u}=e,f=a.useRef(null),p=(0,l.e)(f,r),m=D(t),x="ltr"===(0,A.gm)(i),h=(0,d.M)(e.onKeyDown,e=>{var r;if(!_.includes(e.key))return;let t=e.target,n=m().filter(e=>{var r;return!(null===(r=e.ref.current)||void 0===r?void 0:r.disabled)}),a=n.findIndex(e=>e.ref.current===t),o=n.length;if(-1===a)return;e.preventDefault();let i=a,l=o-1,d=()=>{(i=a+1)>l&&(i=0)},c=()=>{(i=a-1)<0&&(i=l)};switch(e.key){case"Home":i=0;break;case"End":i=l;break;case"ArrowRight":"horizontal"===s&&(x?d():c());break;case"ArrowDown":"vertical"===s&&d();break;case"ArrowLeft":"horizontal"===s&&(x?c():d());break;case"ArrowUp":"vertical"===s&&c()}null===(r=n[i%o].ref.current)||void 0===r||r.focus()});return(0,n.jsx)(z,{scope:t,disabled:o,direction:i,orientation:s,children:(0,n.jsx)(I.Slot,{scope:t,children:(0,n.jsx)(c.WV.div,{...u,"data-orientation":s,ref:p,onKeyDown:o?void 0:h})})})}),B="AccordionItem",[K,L]=O(B),Q=a.forwardRef((e,r)=>{let{__scopeAccordion:t,value:a,...o}=e,i=U(B,t),l=F(B,t),d=E(t),s=(0,p.M)(),c=a&&l.value.includes(a)||!1,u=i.disabled||e.disabled;return(0,n.jsx)(K,{scope:t,open:c,disabled:u,triggerId:s,children:(0,n.jsx)(w,{"data-orientation":i.orientation,"data-state":er(c),...d,...o,ref:r,disabled:u,open:c,onOpenChange:e=>{e?l.onItemOpen(a):l.onItemClose(a)}})})});Q.displayName=B;var Y="AccordionHeader",G=a.forwardRef((e,r)=>{let{__scopeAccordion:t,...a}=e,o=U(k,t),i=L(Y,t);return(0,n.jsx)(c.WV.h3,{"data-orientation":o.orientation,"data-state":er(i.open),"data-disabled":i.disabled?"":void 0,...a,ref:r})});G.displayName=Y;var J="AccordionTrigger",X=a.forwardRef((e,r)=>{let{__scopeAccordion:t,...a}=e,o=U(k,t),i=L(J,t),l=M(J,t),d=E(t);return(0,n.jsx)(I.ItemSlot,{scope:t,children:(0,n.jsx)(g,{"aria-disabled":i.open&&!l.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...d,...a,ref:r})})});X.displayName=J;var $="AccordionContent",ee=a.forwardRef((e,r)=>{let{__scopeAccordion:t,...a}=e,o=U(k,t),i=L($,t),l=E(t);return(0,n.jsx)(j,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...l,...a,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function er(e){return e?"open":"closed"}ee.displayName=$;var et=t(875),en=t(3448);let ea=V,eo=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(Q,{ref:r,className:(0,en.cn)("border-b",t),...a})});eo.displayName="AccordionItem";let ei=a.forwardRef((e,r)=>{let{className:t,children:a,...o}=e;return(0,n.jsx)(G,{className:"flex",children:(0,n.jsxs)(X,{ref:r,className:(0,en.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...o,children:[a,(0,n.jsx)(et.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});ei.displayName=X.displayName;let el=a.forwardRef((e,r)=>{let{className:t,children:a,...o}=e;return(0,n.jsx)(ee,{ref:r,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:(0,n.jsx)("div",{className:(0,en.cn)("pb-4 pt-0",t),children:a})})});el.displayName=ee.displayName},9820:function(e,r,t){t.d(r,{Ol:function(){return l},SZ:function(){return s},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return d}});var n=t(7437),a=t(2265),o=t(3448);let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});i.displayName="Card";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",t),...a})});l.displayName="CardHeader";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});d.displayName="CardTitle";let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,o.cn)("text-sm text-muted-foreground",t),...a})});s.displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("flex items-center p-6 pt-0",t),...a})});u.displayName="CardFooter"},3448:function(e,r,t){t.d(r,{cn:function(){return o}});var n=t(1994),a=t(3335);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}}}]);