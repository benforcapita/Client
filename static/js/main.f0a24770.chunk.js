(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){t.exports=n.p+"static/media/second.e1b63334.jpeg"},40:function(t,e,n){t.exports=n.p+"static/media/first.c017cca1.jpeg"},41:function(t,e,n){t.exports=n.p+"static/media/third.7186f418.jpeg"},42:function(t,e,n){t.exports=n(86)},48:function(t,e,n){},49:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},63:function(t,e,n){},84:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(22),c=n.n(i),l=(n(48),n(49),n(6)),r=n(7),u=n(10),s=n(8),m=n(11),h=n(9),p=n(36),d={color:"white",fontFamily:"Roboto, sans-serif,",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:"3em,",textAlign:"center",height:"50%",width:"100%",position:"absolute",bottom:"0"},b=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={text:[]},n.componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.componentDidMount(),n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;!0===this.props.title&&fetch("http://165.22.206.70:3001/title").then(function(t){return t.json()}).then(function(e){return t.setState({text:e})})}},{key:"render",value:function(){return o.a.createElement(p.Parallax,{bgImage:this.props.url,blur:{min:-1,max:3}},o.a.createElement("div",{style:{height:500}},o.a.createElement("h1",{style:d,dangerouslySetInnerHTML:{__html:this.state.text}})))}}]),e}(o.a.Component),f=n(19),v=n.n(f),E=n(15),j=n.n(E),g=n(37),y=n.n(g),O={background:"white",width:"200px",height:"200px",borderRadius:"100px",overflow:"hidden"},x={float:"none",margin:"0 auto",padding:"20px 0"},k=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={text:[]},n.componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.componentDidMount(),n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("http://165.22.206.70:3001/aboutMe").then(function(t){return t.json()}).then(function(e){return t.setState({text:e.object.content})})}},{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement(j.a,null,o.a.createElement("col-lg-2",{style:x},o.a.createElement("img",{style:O,src:y.a,alt:"test"}))),o.a.createElement(j.a,null,o.a.createElement("col-lg-2",{style:x},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.text}}))))}}]),e}(o.a.Component),w=n(23),M=n.n(w),C=(n(53),n(54),n(38)),D=n.n(C),S=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("button",{className:"imageButton",onClick:this.props.onClick}," ",o.a.createElement(D.a,{src:this.props.src,alt:this.props.alt}))}}]),e}(o.a.Component),N=(n(55),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"overlayVisable",value:function(){return!0===this.props.visable?"overlay show":"overlay"}},{key:"render",value:function(){return o.a.createElement("div",{className:this.overlayVisable()},o.a.createElement(S,{src:this.props.url,onClick:this.props.onClick}))}}]),e}(o.a.Component)),_=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={visible:!1,photoSrc:"",photos:[]},n.selectPhoto=n.selectPhoto.bind(Object(m.a)(n)),n.componentDidMount(),n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"getPhotos",value:function(){for(var t=this,e=[],n=function(n){e.push(o.a.createElement(M.a,{lg:3,md:4,sm:6,xs:12},o.a.createElement(S,{src:t.state.photos[n].url,alt:"test ",onClick:function(){t.selectPhoto(t.state.photos[n].url)}})))},a=0;a<this.state.photos.length;a++)n(a);return e}},{key:"componentDidMount",value:function(){var t=this;fetch("http://165.22.206.70:3001/images").then(function(t){return t.json()}).then(function(e){return t.setState({photos:e.media})})}},{key:"selectPhoto",value:function(t){this.setState({visible:!this.state.visible,photoSrc:void 0!==t?t:""})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"GalleyContainer"},o.a.createElement(N,{url:this.state.photoSrc,visable:this.state.visible,onClick:function(){t.selectPhoto(void 0)}}),o.a.createElement("div",{className:"ImageContainer"},o.a.createElement(v.a,null,o.a.createElement(j.a,null,this.getPhotos()))))}}]),e}(o.a.Component),z=(n(56),n(24)),I=n.n(z),T=n(20),P=n.n(T),B=n(16),A=n.n(B),H=n(17),W=n.n(H),Y=n(39),F=n.n(Y),G=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).inputStyleName={textAlign:"he"===navigator.language?"right":"left"},n.inputStyleNumber={textAlign:"he"===navigator.language?"right":"left"},n.state={localizationText:[]},n.sendEmail=n.sendEmail.bind(Object(m.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.componentDidMount(),n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("http://165.22.206.70:3001/contectMeData").then(function(t){return t.json()}).then(function(e){return t.setState({localizationText:e})})}},{key:"sendEmail",value:function(){var t=document.getElementById("nameInput").value,e=document.getElementById("formPhoneNumber").value,n=document.getElementById("howDidYouHeardAboutMe").value;fetch("http://165.22.206.70:3001/sendEmails??name="+t+"&Phone="+e+"&how="+n)}},{key:"render",value:function(){return o.a.createElement("div",{className:"ContectSection"},o.a.createElement("h1",null,this.state.localizationText.contectme),o.a.createElement(I.a,{className:"ContectMeForm"},o.a.createElement(A.a,{controlId:"nameInput"},o.a.createElement(W.a,null,this.state.localizationText.name),o.a.createElement(P.a,{type:"Name",placeholder:this.state.localizationText.enter_your_name,style:this.inputStyleName})),o.a.createElement(A.a,{controlId:"formPhoneNumber"},o.a.createElement(W.a,null,this.state.localizationText.phone_number),o.a.createElement(I.a.Control,{type:"number",placeholder:this.state.localizationText.enter_your_phone_number,style:this.inputStyleNumber})),o.a.createElement(W.a,null,this.state.localizationText.how_did_you_heard_about_me),o.a.createElement(A.a,{controlId:"howDidYouHeardAboutMe"},o.a.createElement(P.a,{as:"select",dir:this.state.localizationText.optiondir},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement(F.a,{variant:"primary",type:"button",onClick:this.sendEmail},this.state.localizationText.submit)))}}]),e}(o.a.Component),J=(n(63),n(25)),L=n.n(J),R=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement(L.a,{className:"webSiteNavBar",bg:"dark",variant:"dark"},o.a.createElement(L.a.Brand,{href:"#home"},"\u05d3\u05d5\u05e8"))}}]),e}(a.Component),V=(n(84),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"})}}]),e}(o.a.Component)),q=n(40),$=n.n(q),K=n(41),Q=n.n(K),U="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",X={textAlign:"he"===navigator.language?"right":"left"};var Z=function(){return o.a.createElement("div",{className:"App",style:X},o.a.createElement(b,{url:$.a,title:!0}),o.a.createElement(k,null),o.a.createElement(b,{url:Q.a,title:!1}),o.a.createElement(_,null),o.a.createElement(b,{url:U,title:!1}),o.a.createElement(G,null),o.a.createElement(R,null),o.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(85);c.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.f0a24770.chunk.js.map