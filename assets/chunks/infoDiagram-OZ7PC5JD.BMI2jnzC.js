import{_ as e,l as s,K as n,k as i,L as p}from"./mermaid.CHql-oLN.js";import{p as g}from"./gitGraph-YCYPL57B.DPV7Vbny.js";import"./framework.D-WqjATM.js";import"./baseUniq.CExu7Pwq.js";import"./basePickBy.QPUvj-It.js";import"./clone.D6rmyH8y.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},z={parser:v,db:c,renderer:f};export{z as diagram};
