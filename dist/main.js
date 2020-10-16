!function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);a(1),a(2),a(3),a(4),a(5);window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("myModal"),e=document.getElementById("hydroModal"),a=document.getElementById("thermoModal"),r=document.getElementById("solarModal"),n=document.getElementsByClassName("audio"),l=document.getElementById("myBtn"),o=document.getElementById("hBtn"),d=document.getElementById("tBtn"),c=document.getElementById("sBtn"),i=document.getElementById("wBtn"),u=document.getElementsByClassName("close")[0],s=document.getElementsByClassName("close")[1],v=document.getElementsByClassName("close")[2],p=document.getElementsByClassName("close")[3],f=document.getElementsByClassName("close")[4];l.onclick=function(){t.style.display="block",n[0].currentTime=0,n[0].play()},o.onclick=function(){e.style.display="block"},d.onclick=function(){a.style.display="block"},c.onclick=function(){r.style.display="block"},i.onclick=function(){windModal.style.display="block"},u.onclick=function(){t.style.display="none"},f.onclick=function(){e.style.display="none",window.location.reload()},p.onclick=function(){a.style.display="none",window.location.reload()},v.onclick=function(){r.style.display="none",window.location.reload()},s.onclick=function(){windModal.style.display="none",window.location.reload()},window.onclick=function(n){n.target!=t&&n.target!=e&&n.target!==a&&n.target!==r&&n.target!==windModal||(n.target.style.display="none",window.location.reload())}}))},function(t,e,a){},function(t,e){var a=[{country:"Russia",value:19.95,color:"#000000",prodH:[12,15,18,9,16],dataset:[{date:1993,value:2},{date:1998,value:3},{date:2003,value:8},{date:2005,value:17},{date:2009,value:12},{date:2014,value:17},{date:2019,value:19.95}]},{country:"Canada",value:61.3,color:"#00a2ee",prodH:[45,32,58,65,60],dataset:[{date:1993,value:0},{date:1998,value:0},{date:2003,value:8},{date:2005,value:30},{date:2009,value:45},{date:2014,value:42},{date:2019,value:61.3}]},{country:"China",value:20,color:"#fbcb39",prodH:[8,11,15,18,20],dataset:[{date:1993,value:3},{date:1998,value:4},{date:2003,value:7},{date:2005,value:26},{date:2009,value:11},{date:2014,value:16},{date:2019,value:20}]},{country:"United States",value:6.6,color:"#007bc8",prodH:[1,3,5,10,7],dataset:[{date:1993,value:2},{date:1998,value:3},{date:2003,value:5},{date:2005,value:10},{date:2009,value:15},{date:2014,value:12},{date:2019,value:6.6}]},{country:"Brazil",value:65,color:"#65cedb",prodH:[40,48,32,55,70],dataset:[{date:1993,value:16},{date:1998,value:20},{date:2003,value:36},{date:2005,value:50},{date:2009,value:29},{date:2014,value:46},{date:2019,value:65}]},{country:"Australia",value:5,color:"#ff6e52",prodH:[1,3,5,10,7],dataset:[{date:1993,value:6},{date:1998,value:5},{date:2003,value:6},{date:2005,value:9},{date:2009,value:2},{date:2014,value:3},{date:2019,value:5}]},{country:"India",value:26,color:"#f9de3f",prodH:[8,11,15,18,26],dataset:[{date:1993,value:1},{date:1998,value:2},{date:2003,value:9},{date:2005,value:15},{date:2009,value:11},{date:2014,value:19},{date:2019,value:26}]},{country:"Argentina",value:36,color:"#5d2f8e",prodH:[1,3,5,10,7.3],dataset:[{date:1993,value:5},{date:1998,value:3},{date:2003,value:8},{date:2005,value:20},{date:2009,value:27},{date:2014,value:23},{date:2019,value:36}]},{country:"Kazakhstan",value:13,color:"#008fc9",prodH:[12,15,18,9,16],dataset:[{date:1993,value:0},{date:1998,value:0},{date:2003,value:0},{date:2005,value:5},{date:2009,value:9},{date:2014,value:18},{date:2019,value:13}]}];function r(){var t=d3.select("#container").append("svg").attr("class","chart"),e=t.append("g").attr("transform","translate(".concat(80,", ").concat(80,")")),n=d3.scaleBand().range([0,840]).domain(a.map((function(t){return t.country}))).padding(.4),l=d3.scaleLinear().range([440,0]).domain([0,70]);e.append("g").attr("transform","translate(0, ".concat(440,")")).call(d3.axisBottom(n)),e.append("g").call(d3.axisLeft(l)),e.append("g").attr("class","grid").call(d3.axisLeft().scale(l).tickSize(-840,0,0).tickFormat(""));var o=e.selectAll().data(a).enter().append("g");o.append("rect").attr("class","bar").attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()).attr("height",0).transition().duration(500).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)})).attr("height",(function(t){return 440-l(t.value)})),d3.selectAll(".bar").on("click",(function(t,e){d3.selectAll(".chart").remove(),function(t){var e=t.dataset;console.log(e);var a=d3.select("#container").append("svg").attr("class","chart"),n=a.append("g").attr("id","visualisation").attr("transform","translate(".concat(40,", ").concat(80,")")),l=d3.select("#visualisation"),o=1e3-2*(c=80),d=600-2*c,c={top:20,right:20,bottom:20,left:50},i=d3.scaleLinear().range([0,o]).domain(d3.extent(e,(function(t){return t.date}))),u=d3.scaleLinear().range([d-c.top,c.bottom]).domain([0,d3.max(e,(function(t){return t.value}))]),s=d3.axisBottom().scale(i).tickFormat(d3.format("d")),v=d3.axisLeft().scale(u);n.append("g").attr("class","grid").attr("transform","translate("+c.left+",0)").call(d3.axisLeft().scale(u).tickSize(-o,0,0).tickFormat("")),l.append("svg:g").attr("class","x axis").attr("transform","translate("+c.left+","+(d-c.bottom)+")").call(s),l.append("svg:g").attr("class","y axis").attr("transform","translate("+c.left+",0)").call(v);var p=d3.line().x((function(t){return i(t.date)})).y((function(t){return u(t.value)})).curve(d3.curveBasis),f=l.append("svg:path").attr("class","path").attr("d",p(e)).attr("stroke","blue").attr("stroke-width",2).attr("fill","none").attr("transform","translate("+c.left+",0)"),h=f.node().getTotalLength();f.attr("stroke-dasharray",h+" "+h).attr("stroke-dashoffset",h).transition().duration(4e3).ease(d3.easeLinear).attr("stroke-dashoffset",0),a.append("text").attr("class","title").attr("x",o/2+80).attr("y",40).attr("text-anchor","middle").text("Hydro power usage in ".concat(t.country," throughout the years")),a.append("text").attr("class","label").attr("x",-d/2-80).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),a.append("text").attr("class","back2").attr("x",o/10).attr("y",40).attr("text-anchor","middle").text("Back").on("click",(function(t,e){d3.selectAll(".chart").remove(),r()}))}(t)})).on("mouseenter",(function(t,a){d3.selectAll(".value").attr("opacity",0),d3.select(this).transition().duration(300).attr("opacity",.6).attr("x",(function(t){return n(t.country)-5})).attr("width",n.bandwidth()+10);var r=l(t.value);e.append("line").attr("id","limit").attr("x1",0).attr("y1",r).attr("x2",840).attr("y2",r);o.append("text").attr("class","divergence").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-10})).attr("text-anchor","middle").text((function(e,r){var n=(e.value-t.value).toFixed(1),l="";return n>0&&(l+="+"),l+="".concat(n,"%"),r!==a?l:"".concat(t.country,", ").concat(t.value,"%")}))})).on("mouseleave",(function(){d3.selectAll(".value").attr("opacity",1),d3.select(this).transition().duration(300).attr("opacity",1).attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()),e.selectAll("#limit").remove(),e.selectAll(".divergence").remove()})),o.append("text").attr("class","value").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-5})).attr("y",(function(t){return 440})).attr("height",0).transition().duration(500).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)-20})).attr("height",(function(t){return 440-l(t.value)})).attr("height",(function(t){return t.value})).attr("text-anchor","middle").text(0).transition().tween("text",(function(){var t=d3.select(this),e=d3.select(this).text(),a=this.getAttribute("height"),r=d3.interpolateNumber(e,a);return function(e){t.text(Math.round(r(e)))}})).duration(3e3),t.append("text").attr("class","label").attr("x",-300).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),t.append("text").attr("class","title").attr("x",500).attr("y",40).attr("text-anchor","middle").text("Electricity generation by hydropower in 2019"),t.append("text").attr("class","back2").attr("x",84).attr("y",40).attr("text-anchor","middle").text("Click to find out more").on("click",(function(t,e){d3.selectAll(".chart").remove(),function(){var t=d3.select("#container").append("svg").attr("class","chart");MARGINS=80,WIDTH=1e3-2*MARGINS,HEIGHT=600-2*MARGINS,MARGINS={top:20,right:20,bottom:20,left:50},t.append("foreignObject").attr("class","graph-title").attr("width",WIDTH).attr("height",600).attr("x",50).attr("y",0).append("xhtml:body").style("font","14px 'Helvetica Neue'").html("<h1>Hydroelectricity</h1><div><div><p>Hydroenergy is a renewable type of energy that uses flowing water to power a turbine to produce electrical energy</p><p>To generate electricity, water must be in motion. This is kinetic (moving) energy. When flowing water turns blades in a turbine, the form is changed to mechanical (machine) energy. The turbine turns the generator rotor which then converts this mechanical energy into another energy form -- electricity. Since water is the initial source of energy, we call this hydroelectric power or hydropower for short. </p></div><div class='graph-div'></div></div>"),t.append("text").attr("class","back2").attr("x",WIDTH/10).attr("y",50).attr("text-anchor","middle").text("Back").on("click",(function(){d3.selectAll(".chart").remove(),r()}))}()}))}window.addEventListener("DOMContentLoaded",(function(){document.getElementById("what1").onclick=function(){r()}}))},function(t,e){var a=[{country:"Russia",value:1,color:"#000000",prodH:[12,15,18,9,16],dataset:[{date:1993,value:0},{date:1998,value:0},{date:2003,value:0},{date:2005,value:.3},{date:2009,value:2},{date:2014,value:.05},{date:2019,value:.1}]},{country:"Canada",value:2.9,color:"#00a2ee",prodH:[45,32,58,65,60],dataset:[{date:1993,value:1},{date:1998,value:1},{date:2003,value:1},{date:2005,value:1.5},{date:2009,value:2.5},{date:2014,value:2},{date:2019,value:2.9}]},{country:"China",value:6.3,color:"#fbcb39",prodH:[8,11,15,18,20],dataset:[{date:1993,value:0},{date:1998,value:.5},{date:2003,value:.8},{date:2005,value:1},{date:2009,value:3},{date:2014,value:4.2},{date:2019,value:6.33}]},{country:"United States",value:7.3,color:"#007bc8",prodH:[1,3,5,10,7],dataset:[{date:1993,value:0},{date:1998,value:2},{date:2003,value:3},{date:2005,value:5.5},{date:2009,value:5.8},{date:2014,value:7},{date:2019,value:7.3}]},{country:"Brazil",value:2.8,color:"#65cedb",prodH:[40,48,32,55,70],dataset:[{date:1993,value:0},{date:1998,value:2},{date:2003,value:3},{date:2005,value:5.5},{date:2009,value:5.8},{date:2014,value:4},{date:2019,value:2.8}]},{country:"Australia",value:7,color:"#ff6e52",prodH:[1,3,5,10,7],dataset:[{date:1993,value:0},{date:1998,value:2},{date:2003,value:3},{date:2005,value:5.5},{date:2009,value:5.8},{date:2014,value:7},{date:2019,value:7}]},{country:"India",value:4.6,color:"#f9de3f",prodH:[8,11,15,18,26],dataset:[{date:1993,value:1},{date:1998,value:1},{date:2003,value:1},{date:2005,value:2.8},{date:2009,value:5},{date:2014,value:3},{date:2019,value:4.6}]},{country:"Argentina",value:1,color:"#5d2f8e",prodH:[1,3,5,10,7.3],dataset:[{date:1993,value:0},{date:1998,value:0},{date:2003,value:0},{date:2005,value:.5},{date:2009,value:.5},{date:2014,value:.8},{date:2019,value:1}]},{country:"Kazakhstan",value:3.2,color:"#008fc9",prodH:[12,15,18,9,16],dataset:[{date:1993,value:1},{date:1998,value:1},{date:2003,value:1},{date:2005,value:1.5},{date:2009,value:2.5},{date:2014,value:2},{date:2019,value:3.2}]}];function r(){var t=d3.select("#container1").append("svg").attr("class","chart1"),e=t.append("g").attr("transform","translate(".concat(80,", ").concat(80,")")),n=d3.scaleBand().range([0,840]).domain(a.map((function(t){return t.country}))).padding(.4),l=d3.scaleLinear().range([440,0]).domain([0,10]);e.append("g").attr("transform","translate(0, ".concat(440,")")).call(d3.axisBottom(n)),e.append("g").call(d3.axisLeft(l)),e.append("g").attr("class","grid").call(d3.axisLeft().scale(l).tickSize(-840,0,0).tickFormat(""));var o=e.selectAll().data(a).enter().append("g");o.append("rect").attr("class","bar1").attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()).attr("height",0).transition().duration(500).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)})).attr("height",(function(t){return 440-l(t.value)})),d3.selectAll(".bar1").on("click",(function(t,e){d3.selectAll(".chart1").remove(),function(t){var e=t.dataset;console.log(e);var a=d3.select("#container1").append("svg").attr("class","chart1"),n=a.append("g").attr("id","visualisation").attr("transform","translate(".concat(40,", ").concat(80,")")),l=d3.select("#visualisation"),o=1e3-2*(c=80),d=600-2*c,c={top:20,right:20,bottom:20,left:50},i=d3.scaleLinear().range([0,o]).domain(d3.extent(e,(function(t){return t.date}))),u=d3.scaleLinear().range([d-c.top,c.bottom]).domain([0,d3.max(e,(function(t){return t.value}))]),s=d3.axisBottom().scale(i).tickFormat(d3.format("d")),v=d3.axisLeft().scale(u);n.append("g").attr("class","grid").attr("transform","translate("+c.left+",0)").call(d3.axisLeft().scale(u).tickSize(-o,0,0).tickFormat("")),l.append("svg:g").attr("class","x axis").attr("transform","translate("+c.left+","+(d-c.bottom)+")").call(s),l.append("svg:g").attr("class","y axis").attr("transform","translate("+c.left+",0)").call(v);var p=d3.line().x((function(t){return i(t.date)})).y((function(t){return u(t.value)})).curve(d3.curveBasis),f=l.append("svg:path").attr("class","path1").attr("d",p(e)).attr("stroke","blue").attr("stroke-width",2).attr("fill","none").attr("transform","translate("+c.left+",0)"),h=f.node().getTotalLength();f.attr("stroke-dasharray",h+" "+h).attr("stroke-dashoffset",h).transition().duration(4e3).ease(d3.easeLinear).attr("stroke-dashoffset",0),a.append("text").attr("class","title").attr("x",o/2+80).attr("y",40).attr("text-anchor","middle").text("Wind power usage in ".concat(t.country," throughout the years")),a.append("text").attr("class","label").attr("x",-d/2-80).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),a.append("text").attr("class","back3").attr("x",o/10).attr("y",40).attr("text-anchor","middle").text("Back").on("click",(function(t,e){d3.selectAll(".chart1").remove(),r()}))}(t)})).on("mouseenter",(function(t,a){d3.selectAll(".value").attr("opacity",0),d3.select(this).transition().duration(300).attr("opacity",.6).attr("x",(function(t){return n(t.country)-5})).attr("width",n.bandwidth()+10);var r=l(t.value);e.append("line").attr("id","limit").attr("x1",0).attr("y1",r).attr("x2",840).attr("y2",r);o.append("text").attr("class","divergence").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-10})).attr("text-anchor","middle").text((function(e,r){var n=(e.value-t.value).toFixed(1),l="";return n>0&&(l+="+"),l+="".concat(n,"%"),r!==a?l:"".concat(t.country,", ").concat(t.value,"%")}))})).on("mouseleave",(function(){d3.selectAll(".value").attr("opacity",1),d3.select(this).transition().duration(300).attr("opacity",1).attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()),e.selectAll("#limit").remove(),e.selectAll(".divergence").remove()})),o.append("text").attr("class","value").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-5})).attr("y",(function(t){return 440})).attr("height",0).transition().duration(300).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)-20})).attr("height",(function(t){return 440-l(t.value)})).attr("height",(function(t){return t.value})).attr("text-anchor","middle").text(0).transition().tween("text",(function(){var t=d3.select(this),e=(d3.select(this).text(),this.getAttribute("height")),a=d3.interpolateNumber(e,e);return function(e){t.text(Math.round(a(e)))}})).duration(3e3),t.append("text").attr("class","label").attr("x",-300).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),t.append("text").attr("class","title").attr("x",500).attr("y",40).attr("text-anchor","middle").text("Electricity generation by wind power in 2019"),t.append("text").attr("class","back2").attr("x",84).attr("y",40).attr("text-anchor","middle").text("Click to find out more").on("click",(function(t,e){d3.selectAll(".chart1").remove(),function(){var t=d3.select("#container1").append("svg").attr("class","chart1");MARGINS=80,WIDTH=1e3-2*MARGINS,HEIGHT=600-2*MARGINS,MARGINS={top:20,right:20,bottom:20,left:50},t.append("foreignObject").attr("class","graph-title1").attr("width",WIDTH).attr("height",600).attr("x",50).attr("y",0).append("xhtml:body").style("font","14px 'Helvetica Neue'").html("<h1>Wind Power</h1><div><div><p>Wind power or wind energy is the use of wind to provide the mechanical power through wind turbines to turn electric generators and traditionally to do other work, like milling or pumping.</p><p>When the wind blows past a wind turbine, its blades capture the wind's kinetic energy and rotate, turning it into mechanical energy. This rotation turns an internal shaft connected to a gearbox, which increases the speed of rotation by a factor of 100. That spins a generator that produces electricity.<p> </p></div><div class='graph-div1'></div></div>"),t.append("text").attr("class","back4").attr("x",WIDTH/10).attr("y",50).attr("text-anchor","middle").text("Back").on("click",(function(){d3.selectAll(".chart1").remove(),r()}))}()}))}window.addEventListener("DOMContentLoaded",(function(){document.getElementById("what3").onclick=function(){r()}}))},function(t,e){var a=[{country:"Russia",value:1,color:"#000000",prodH:[12,15,18,9,16],dataset:[{date:1993,value:0},{date:1998,value:0},{date:2003,value:0},{date:2005,value:.3},{date:2009,value:2},{date:2014,value:.05},{date:2019,value:.4}]},{country:"Canada",value:5.2,color:"#00a2ee",prodH:[45,32,58,65,60],dataset:[{date:1993,value:1},{date:1998,value:1},{date:2003,value:1},{date:2005,value:2.8},{date:2009,value:5},{date:2014,value:3},{date:2019,value:5.2}]},{country:"China",value:2.5,color:"#fbcb39",prodH:[8,11,15,18,20],dataset:[{date:1993,value:0},{date:1998,value:.5},{date:2003,value:.8},{date:2005,value:1},{date:2009,value:3},{date:2014,value:4.2},{date:2019,value:2.5}]},{country:"United States",value:1.8,color:"#007bc8",prodH:[1,3,5,10,7],dataset:[{date:1993,value:0},{date:1998,value:2},{date:2003,value:1},{date:2005,value:5},{date:2009,value:2},{date:2014,value:4},{date:2019,value:1.8}]},{country:"Brazil",value:7.2,color:"#65cedb",prodH:[40,48,32,55,70],dataset:[{date:1993,value:0},{date:1998,value:2},{date:2003,value:3},{date:2005,value:5.5},{date:2009,value:5.8},{date:2014,value:7},{date:2019,value:7.2}]},{country:"Australia",value:7,color:"#ff6e52",prodH:[1,3,5,10,7],dataset:[{date:1993,value:0},{date:1998,value:2},{date:2003,value:3},{date:2005,value:5.5},{date:2009,value:5.8},{date:2014,value:7},{date:2019,value:7}]},{country:"India",value:8.3,color:"#f9de3f",prodH:[8,11,15,18,26],dataset:[{date:1993,value:1},{date:1998,value:2.9},{date:2003,value:3.8},{date:2005,value:6},{date:2009,value:5.8},{date:2014,value:7},{date:2019,value:8.3}]},{country:"Argentina",value:1,color:"#5d2f8e",prodH:[1,3,5,10,7.3],dataset:[{date:1993,value:0},{date:1998,value:0},{date:2003,value:0},{date:2005,value:.5},{date:2009,value:.5},{date:2014,value:.8},{date:2019,value:1}]},{country:"Kazakhstan",value:2.5,color:"#008fc9",prodH:[12,15,18,9,16],dataset:[{date:1993,value:1},{date:1998,value:1},{date:2003,value:1},{date:2005,value:1.5},{date:2009,value:2.5},{date:2014,value:2},{date:2019,value:2.5}]}];function r(){var t=d3.select("#container2").append("svg").attr("class","chart2"),e=t.append("g").attr("transform","translate(".concat(80,", ").concat(80,")")),n=d3.scaleBand().range([0,840]).domain(a.map((function(t){return t.country}))).padding(.4),l=d3.scaleLinear().range([440,0]).domain([0,10]);e.append("g").attr("transform","translate(0, ".concat(440,")")).call(d3.axisBottom(n)),e.append("g").call(d3.axisLeft(l)),e.append("g").attr("class","grid").call(d3.axisLeft().scale(l).tickSize(-840,0,0).tickFormat(""));var o=e.selectAll().data(a).enter().append("g");o.append("rect").attr("class","bar2").attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()).attr("y",(function(t){return 440})).attr("height",0).transition().duration(500).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)})).attr("height",(function(t){return 440-l(t.value)})),d3.selectAll(".bar2").on("click",(function(t,e){d3.selectAll(".chart2").remove(),function(t){var e=t.dataset;console.log(e);var a=d3.select("#container2").append("svg").attr("class","chart2"),n=a.append("g").attr("id","visualisation").attr("transform","translate(".concat(40,", ").concat(80,")")),l=d3.select("#visualisation"),o=1e3-2*(c=80),d=600-2*c,c={top:20,right:20,bottom:20,left:50},i=d3.scaleLinear().range([0,o]).domain(d3.extent(e,(function(t){return t.date}))),u=d3.scaleLinear().range([d-c.top,c.bottom]).domain([0,d3.max(e,(function(t){return t.value}))]),s=d3.axisBottom().scale(i).tickFormat(d3.format("d")),v=d3.axisLeft().scale(u);n.append("g").attr("class","grid").attr("transform","translate("+c.left+",0)").call(d3.axisLeft().scale(u).tickSize(-o,0,0).tickFormat("")),l.append("svg:g").attr("class","x axis").attr("transform","translate("+c.left+","+(d-c.bottom)+")").call(s),l.append("svg:g").attr("class","y axis").attr("transform","translate("+c.left+",0)").call(v);var p=d3.line().x((function(t){return i(t.date)})).y((function(t){return u(t.value)})).curve(d3.curveBasis),f=l.append("svg:path").attr("class","path2").attr("d",p(e)).attr("stroke","blue").attr("stroke-width",2).attr("fill","none").attr("transform","translate("+c.left+",0)"),h=f.node().getTotalLength();f.attr("stroke-dasharray",h+" "+h).attr("stroke-dashoffset",h).transition().duration(4e3).ease(d3.easeLinear).attr("stroke-dashoffset",0),a.append("text").attr("class","title").attr("x",o/2+80).attr("y",40).attr("text-anchor","middle").text("Solar power usage in ".concat(t.country," throughout the years")),a.append("text").attr("class","label").attr("x",-d/2-80).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),a.append("text").attr("class","back3").attr("x",o/10).attr("y",40).attr("text-anchor","middle").text("Back").on("click",(function(t,e){d3.selectAll(".chart2").remove(),r()}))}(t)})).on("mouseenter",(function(t,a){d3.selectAll(".value").attr("opacity",0),d3.select(this).transition().duration(300).attr("opacity",.6).attr("x",(function(t){return n(t.country)-5})).attr("width",n.bandwidth()+10);var r=l(t.value);e.append("line").attr("id","limit").attr("x1",0).attr("y1",r).attr("x2",840).attr("y2",r);o.append("text").attr("class","divergence").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-10})).attr("text-anchor","middle").text((function(e,r){var n=(e.value-t.value).toFixed(1),l="";return n>0&&(l+="+"),l+="".concat(n,"%"),r!==a?l:"".concat(t.country,", ").concat(t.value,"%")}))})).on("mouseleave",(function(){d3.selectAll(".value").attr("opacity",1),d3.select(this).transition().duration(300).attr("opacity",1).attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()),e.selectAll("#limit").remove(),e.selectAll(".divergence").remove()})),o.append("text").attr("class","value").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-5})).attr("y",(function(t){return 440})).attr("height",0).transition().duration(300).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)-20})).attr("height",(function(t){return 440-l(t.value)})).attr("height",(function(t){return t.value})).attr("text-anchor","middle").text(0).transition().tween("text",(function(){var t=d3.select(this),e=(d3.select(this).text(),this.getAttribute("height")),a=d3.interpolateNumber(e,e);return function(e){t.text(Math.round(a(e)))}})).duration(3e3),t.append("text").attr("class","label").attr("x",-300).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),t.append("text").attr("class","title").attr("x",500).attr("y",40).attr("text-anchor","middle").text("Electricity generation by solar power in 2019"),t.append("text").attr("class","back2").attr("x",84).attr("y",40).attr("text-anchor","middle").text("Click to find out more").on("click",(function(t,e){d3.selectAll(".chart2").remove(),function(){var t=d3.select("#container2").append("svg").attr("class","chart2");MARGINS=80,WIDTH=1e3-2*MARGINS,HEIGHT=600-2*MARGINS,MARGINS={top:20,right:20,bottom:20,left:50},t.append("foreignObject").attr("class","graph-title2").attr("width",WIDTH).attr("height",600).attr("x",50).attr("y",0).append("xhtml:body").style("font","14px 'Helvetica Neue'").html("<h1>Solar Power</h1><div><div><p>Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination.</p><p>Solar-powered photovoltaic (PV) panels convert the sun's rays into electricity by exciting electrons in silicon cells using the photons of light from the sun. This electricity can then be used to supply renewable energy to your home or business.In most solar systems, solar panels are placed on the roof. An ideal site will have no shade on the panels, especially during the prime sunlight hours of 9 a.m. to 3 p.m.; a south-facing installation will usually provide the optimum potential for your system, but other orientations may provide sufficient production. </p></div><div class='graph-div2'></div></div>"),t.append("text").attr("class","back4").attr("x",WIDTH/10).attr("y",50).attr("text-anchor","middle").text("Back").on("click",(function(){d3.selectAll(".chart2").remove(),r()}))}()}))}window.addEventListener("DOMContentLoaded",(function(){document.getElementById("what2").onclick=function(){r()}}))},function(t,e){var a=[{country:"Russia",value:73.4,color:"#000000",prodH:[12,15,18,9,16],dataset:[{date:1993,value:90},{date:1998,value:88},{date:2003,value:80},{date:2005,value:80},{date:2009,value:75},{date:2014,value:68},{date:2019,value:73.4}]},{country:"Canada",value:34.2,color:"#00a2ee",prodH:[45,32,58,65,60],dataset:[{date:1993,value:80},{date:1998,value:75},{date:2003,value:70},{date:2005,value:64},{date:2009,value:52},{date:2014,value:41},{date:2019,value:34}]},{country:"China",value:72.1,color:"#fbcb39",prodH:[8,11,15,18,20],dataset:[{date:1993,value:98},{date:1998,value:84},{date:2003,value:93},{date:2005,value:80},{date:2009,value:70},{date:2014,value:60},{date:2019,value:72}]},{country:"United States",value:62.7,color:"#007bc8",prodH:[1,3,5,10,7],dataset:[{date:1993,value:90},{date:1998,value:88},{date:2003,value:75},{date:2005,value:88},{date:2009,value:73},{date:2014,value:70},{date:2019,value:62}]},{country:"Brazil",value:25,color:"#65cedb",prodH:[40,48,32,55,70],dataset:[{date:1993,value:60},{date:1998,value:50},{date:2003,value:40},{date:2005,value:39},{date:2009,value:35},{date:2014,value:20},{date:2019,value:25}]},{country:"Australia",value:75,color:"#ff6e52",prodH:[1,3,5,10,7],dataset:[{date:1993,value:90},{date:1998,value:88},{date:2003,value:75},{date:2005,value:88},{date:2009,value:73},{date:2014,value:70},{date:2019,value:75}]},{country:"India",value:72,color:"#f9de3f",prodH:[8,11,15,18,26],dataset:[{date:1993,value:90},{date:1998,value:88},{date:2003,value:75},{date:2005,value:88},{date:2009,value:73},{date:2014,value:70},{date:2019,value:72}]},{country:"Argentina",value:60,color:"#5d2f8e",prodH:[1,3,5,10,7.3],dataset:[{date:1993,value:90},{date:1998,value:88},{date:2003,value:75},{date:2005,value:88},{date:2009,value:73},{date:2014,value:70},{date:2019,value:60}]},{country:"Kazakhstan",value:86.2,color:"#008fc9",prodH:[12,15,18,9,16],dataset:[{date:1993,value:100},{date:1998,value:98},{date:2003,value:93},{date:2005,value:85},{date:2009,value:90},{date:2014,value:84},{date:2019,value:86.2}]}];function r(){var t=d3.select("#container3").append("svg").attr("class","chart3"),e=t.append("g").attr("transform","translate(".concat(80,", ").concat(80,")")),n=d3.scaleBand().range([0,840]).domain(a.map((function(t){return t.country}))).padding(.4),l=d3.scaleLinear().range([440,0]).domain([0,100]);e.append("g").attr("transform","translate(0, ".concat(440,")")).call(d3.axisBottom(n)),e.append("g").call(d3.axisLeft(l)),e.append("g").attr("class","grid").call(d3.axisLeft().scale(l).tickSize(-840,0,0).tickFormat(""));var o=e.selectAll().data(a).enter().append("g");o.append("rect").attr("class","bar3").attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()).attr("height",0).transition().duration(500).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)})).attr("height",(function(t){return 440-l(t.value)})),d3.selectAll(".bar3").on("click",(function(t,e){d3.selectAll(".chart3").remove(),function(t){var e=t.dataset;console.log(e);var a=d3.select("#container3").append("svg").attr("class","chart3"),n=a.append("g").attr("id","visualisation").attr("transform","translate(".concat(40,", ").concat(80,")")),l=d3.select("#visualisation"),o=1e3-2*(c=80),d=600-2*c,c={top:20,right:20,bottom:20,left:50},i=d3.scaleLinear().range([0,o]).domain(d3.extent(e,(function(t){return t.date}))),u=d3.scaleLinear().range([d-c.top,c.bottom]).domain([0,d3.max(e,(function(t){return t.value}))]),s=d3.axisBottom().scale(i).tickFormat(d3.format("d")),v=d3.axisLeft().scale(u);n.append("g").attr("class","grid").attr("transform","translate("+c.left+",0)").call(d3.axisLeft().scale(u).tickSize(-o,0,0).tickFormat("")),l.append("svg:g").attr("class","x axis").attr("transform","translate("+c.left+","+(d-c.bottom)+")").call(s),l.append("svg:g").attr("class","y axis").attr("transform","translate("+c.left+",0)").call(v);var p=d3.line().x((function(t){return i(t.date)})).y((function(t){return u(t.value)})).curve(d3.curveBasis),f=l.append("svg:path").attr("d",p(e)).attr("stroke","blue").attr("stroke-width",2).attr("fill","none").attr("transform","translate("+c.left+",0)"),h=f.node().getTotalLength();f.attr("stroke-dasharray",h+" "+h).attr("stroke-dashoffset",h).transition().duration(4e3).ease(d3.easeLinear).attr("stroke-dashoffset",0),a.append("text").attr("class","title3").attr("x",o/2+80).attr("y",40).attr("text-anchor","middle").text("Thermo power usage in ".concat(t.country," throughout the years")),a.append("text").attr("class","label3").attr("x",-d/2-80).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),a.append("text").attr("class","back3").attr("x",o/10).attr("y",40).attr("text-anchor","middle").text("Back").on("click",(function(t,e){d3.selectAll(".chart3").remove(),r()}))}(t)})).on("mouseenter",(function(t,a){d3.selectAll(".value3").attr("opacity",0),d3.select(this).transition().duration(300).attr("opacity",.6).attr("x",(function(t){return n(t.country)-5})).attr("width",n.bandwidth()+10);var r=l(t.value);e.append("line").attr("id","limit").attr("x1",0).attr("y1",r).attr("x2",840).attr("y2",r);o.append("text").attr("class","divergence").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-10})).attr("text-anchor","middle").text((function(e,r){var n=(e.value-t.value).toFixed(1),l="";return n>0&&(l+="+"),l+="".concat(n,"%"),r!==a?l:"".concat(t.country,", ").concat(t.value,"%")}))})).on("mouseleave",(function(){d3.selectAll(".value3").attr("opacity",1),d3.select(this).transition().duration(300).attr("opacity",1).attr("x",(function(t){return n(t.country)})).attr("width",n.bandwidth()),e.selectAll("#limit").remove(),e.selectAll(".divergence").remove()})),o.append("text").attr("class","value3").attr("x",(function(t){return n(t.country)+n.bandwidth()/2})).attr("y",(function(t){return l(t.value)-5})).attr("y",(function(t){return 440})).attr("height",0).transition().duration(500).delay((function(t,e){return 50*e})).attr("y",(function(t){return l(t.value)-20})).attr("height",(function(t){return 440-l(t.value)})).attr("height",(function(t){return t.value})).attr("text-anchor","middle").text(0).transition().tween("text",(function(){var t=d3.select(this),e=d3.select(this).text(),a=this.getAttribute("height"),r=d3.interpolateNumber(e,a);return function(e){t.text(Math.round(r(e)))}})).duration(3e3),t.append("text").attr("class","label3").attr("x",-300).attr("y",80/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Out of total electricity genration (%)"),t.append("text").attr("class","title3").attr("x",500).attr("y",40).attr("text-anchor","middle").text("Electricity generation by thermo power in 2019"),t.append("text").attr("class","back2").attr("x",84).attr("y",40).attr("text-anchor","middle").text("Click to find out more").on("click",(function(t,e){d3.selectAll(".chart3").remove(),function(){var t=d3.select("#container3").append("svg").attr("class","chart3");MARGINS=80,WIDTH=1e3-2*MARGINS,HEIGHT=600-2*MARGINS,MARGINS={top:20,right:20,bottom:20,left:50},t.append("foreignObject").attr("class","graph-title3").attr("width",WIDTH).attr("height",600).attr("x",50).attr("y",0).append("xhtml:body").style("font","14px 'Helvetica Neue'").html("<h1>Thermoelectricity</h1><div><div><p>Thermoelectricity, also called Peltier-Seebeck effect, direct conversion of heat into electricity or electricity into heat through two related mechanisms, the Seebeck effect and the Peltier effect.</p> <p>A thermoelectric device creates a voltage when there is a different temperature on each side. Conversely, when a voltage is applied to it, heat is transferred from one side to the other, creating a temperature difference. At the atomic scale, an applied temperature gradient causes charge carriers in the material to diffuse from the hot side to the cold side.This effect can be used to generate electricity, measure temperature or change the temperature of objects. <p> </p></div><div class='graph-div3'></div></div>"),t.append("text").attr("class","back4").attr("x",WIDTH/10).attr("y",50).attr("text-anchor","middle").text("Back").on("click",(function(){d3.selectAll(".chart3").remove(),r()}))}()}))}window.addEventListener("DOMContentLoaded",(function(){document.getElementById("what4").onclick=function(){r()}}))}]);
//# sourceMappingURL=main.js.map