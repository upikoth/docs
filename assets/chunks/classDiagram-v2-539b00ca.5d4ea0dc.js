import{p as G,d as E,s as I}from"./styles-0dd3ba1e.40078621.js";import{l as p,c as a,h as S,y as $,t as z,r as N,o as _,p as q,k as M}from"../projects_starter.md.48c84b28.js";import{G as F}from"./layout.2a77f323.js";import{r as H}from"./index-f9d09cc9.e21d5188.js";import"../app.17f2b53f.js";import"./isPlainObject.38129777.js";import"./array.3b96c779.js";import"./path.68e04c1b.js";import"./edges-65da65dc.b66a155c.js";import"./svgDraw-6a237a99.cf7a487d.js";const R=s=>M.sanitizeText(s,a());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const P=function(s,o,h,n){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var f,u;var l,r;const t=s[i];let y="";t.cssClasses.length>0&&(y=y+" "+t.cssClasses.join(" "));const c={labelStyle:"",style:""},v=(f=t.label)!=null?f:t.id,d=0,m="class_box",b={labelStyle:c.labelStyle,shape:m,labelText:R(v),classData:t,rx:d,ry:d,class:y,style:c.style,id:t.id,domId:t.domId,tooltip:n.db.getTooltip(t.id)||"",haveCallback:t.haveCallback,link:t.link,width:t.type==="group"?500:void 0,type:t.type,padding:(u=(l=a().flowchart)==null?void 0:l.padding)!=null?u:(r=a().class)==null?void 0:r.padding};o.setNode(t.id,b),p.info("setNode",b)})},V=function(s,o,h,n){p.info(s),s.forEach(function(e,i){var g;var l,r;const t=e,y="",c={labelStyle:"",style:""},v=t.text,d=0,m="note",b={labelStyle:c.labelStyle,shape:m,labelText:R(v),noteData:t,rx:d,ry:d,class:y,style:c.style,id:t.id,domId:t.id,tooltip:"",type:"note",padding:(g=(l=a().flowchart)==null?void 0:l.padding)!=null?g:(r=a().class)==null?void 0:r.padding};if(o.setNode(t.id,b),p.info("setNode",b),!t.class||!(t.class in n))return;const f=h+i,u={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:N(k.curve,_)};o.setEdge(t.id,t.class,u,f)})},W=function(s,o){const h=a().flowchart;let n=0;s.forEach(function(e){var r;var i;n++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+n,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:A(e.relation.type1),arrowTypeEnd:A(e.relation.type2),style:"fill:none",labelStyle:"",curve:N(h==null?void 0:h.curve,_)};if(p.info(l,e),e.style!==void 0){const t=q(e.style);l.style=t.style,l.labelStyle=t.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((r=(i=a().flowchart)==null?void 0:i.htmlLabels)!=null?r:a().htmlLabels)?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(M.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),o.setEdge(e.id1,e.id2,l,n)})},J=function(s){k={...k,...s}},K=function(s,o,h,n){var u,g,T,L;p.info("Drawing class - ",o);const e=(u=a().flowchart)!=null?u:a().class,i=a().securityLevel;p.info("config:",e);const l=(g=e==null?void 0:e.nodeSpacing)!=null?g:50,r=(T=e==null?void 0:e.rankSpacing)!=null?T:50,t=new F({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),y=n.db.getClasses(),c=n.db.getRelations(),v=n.db.getNotes();p.info(c),P(y,t,o,n),W(c,t),V(v,t,c.length+1,y);let d;i==="sandbox"&&(d=S("#i"+o));const m=i==="sandbox"?S(d.nodes()[0].contentDocument.body):S("body"),b=m.select(`[id="${o}"]`),f=m.select("#"+o+" g");if(H(f,t,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",o),$.insertTitle(b,"classTitleText",(L=e==null?void 0:e.titleTopMargin)!=null?L:5,n.db.getDiagramTitle()),z(t,b,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const C=i==="sandbox"?d.nodes()[0].contentDocument:document,B=C.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(const w of B){const D=w.getBBox(),x=C.createElementNS("http://www.w3.org/2000/svg","rect");x.setAttribute("rx",0),x.setAttribute("ry",0),x.setAttribute("width",D.width),x.setAttribute("height",D.height),w.insertBefore(x,w.firstChild)}}};function A(s){let o;switch(s){case 0:o="aggregation";break;case 1:o="extension";break;case 2:o="composition";break;case 3:o="dependency";break;case 4:o="lollipop";break;default:o="none"}return o}const Q={setConf:J,draw:K},se={parser:G,db:E,renderer:Q,styles:I,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,E.clear()}};export{se as diagram};
