(this["webpackJsonpwishery-front"]=this["webpackJsonpwishery-front"]||[]).push([[0],{228:function(e,t,a){e.exports={root:"styles_root__21ruz"}},24:function(e,t,a){e.exports={root:"styles_root__36oOn",title:"styles_title__16aM7",error:"styles_error__2sNq-",registration:"styles_registration__2oQFi",errorField:"styles_errorField__1Nvmj",row:"styles_row__30zYH",buttonSet:"styles_buttonSet__1fOGN"}},260:function(e,t,a){e.exports=a(446)},37:function(e,t,a){e.exports={root:"styles_root__z_8qL",body:"styles_body__36xgC",content:"styles_content__8SZP9",plus:"styles_plus__18oPA",comments:"styles_comments__3eqMj",buttonContainer:"styles_buttonContainer__1Bn3T",addButton:"styles_addButton__3sUMu",footer:"styles_footer__1UlIF"}},43:function(e,t,a){e.exports={error:"styles_error__1UYgU",button:"styles_button__XTQ-u",root:"styles_root__DuaII",select:"styles_select__yr5zS",errorField:"styles_errorField__2cl5l"}},446:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(26),s=a.n(o),c=a(27),i=a(10),l=a.n(i),u=a(22),m=a(17),p=a(18),h=a(19),d=a(20),f=a(21),v=a(37),b=a.n(v),y=a(24),O=a.n(y),E=(a(266),a(248)),g=a(121),j=a(117),w=a(228),k=a.n(w),S=function(e){var t=e.children,a=Object(j.a)(e,["children"]);return n.a.createElement("button",Object.assign({className:k.a.root},a),t)},_=a(23),x=a.n(_),C=a(32),D=a(456),P=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={visible:!1,errorFromServer:""},a.handleOpenLoginDialog=function(){return a.setState({visible:!0})},a.handleCloseLoginDialog=function(){return a.setState({visible:!1})},a.nameChange=function(){"Email or username is wrong"===a.state.errorFromServer&&a.setState({errorFromServer:""})},a.passwordChange=function(){"Invalid password"===a.state.errorFromServer&&a.setState({errorFromServer:""})},a.onSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var r,n,o,s,c,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.password,n=t.name,o=a.props.login,e.next=4,x.a.post("/user/login",{name:n,password:r});case 4:s=e.sent,c=Object(E.a)(s.data,2),i=c[0],u=c[1],o(i,u),a.setState({visible:!1,errorFromServer:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.visible;return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{onClick:this.handleOpenLoginDialog},"Login"),n.a.createElement(g.a,{title:"Login",onClose:this.handleCloseLoginDialog,visible:t},n.a.createElement("div",{className:O.a.registration},n.a.createElement(C.b,{onSubmit:this.onSubmit,validate:function(t){var a={};switch(t.name?t.name.length<3&&(a.name="Username must be over 2 characters"):a.name="Required",t.password?t.password.length<6&&(a.password="Password must be over 5 characters"):a.password="Required",e.state.errorFromServer){case"Email or username is wrong":a.name="Email or username is wrong";break;case"Invalid password":a.password="Invalid password"}return a},render:function(t){var a=t.handleSubmit,r=t.submitting,o=t.pristine;t.form;return n.a.createElement(D.a,{onSubmit:function(){var t=Object(u.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a(r);case 3:return t.next=5,e.setState({visible:!1,errorFromServer:""});case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data),e.setState({errorFromServer:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},n.a.createElement(C.a,{name:"name"},(function(t){var a=t.input,r=t.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Login"),n.a.createElement("input",Object.assign({},a,{type:"text",placeholder:"Username or Email",onClick:e.nameChange,className:r.error&&r.touched?O.a.errorField:""})),r.error&&r.touched&&n.a.createElement("span",{className:O.a.error},r.error))})),n.a.createElement(C.a,{name:"password"},(function(t){var a=t.input,r=t.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Password"),n.a.createElement("input",Object.assign({},a,{type:"password",placeholder:"Password",onClick:e.passwordChange,className:r.error&&r.touched?O.a.errorField:""})),r.error&&r.touched&&n.a.createElement("span",{className:O.a.error},r.error))})),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:O.a.row},n.a.createElement(S,{type:"submit",disabled:r||o},"Log In"))))}}))))}}]),t}(n.a.Component),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={visible:!1,errorFromServer:""},a.handleOpenDialog=function(){return a.setState({visible:!0})},a.handleCloseDialog=function(){a.setState({visible:!1,errorFromServer:""})},a.usernameChange=function(){"Username already exists"===a.state.errorFromServer&&a.setState({errorFromServer:""})},a.emailChange=function(){a.state.errorFromServer,a.setState({errorFromServer:""})},a.onSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,r=t.password,n=t.username,e.next=3,x.a.post("/user/register",{email:a,password:r,username:n});case 3:o=e.sent,console.log(o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.visible;return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{onClick:this.handleOpenDialog},"Register"),n.a.createElement(g.a,{title:"Register",onClose:this.handleCloseDialog,visible:t},n.a.createElement("div",{className:O.a.registration},n.a.createElement(C.b,{onSubmit:this.onSubmit,validate:function(t){var a={};switch(t.username?t.username.length<3&&(a.username="Username must be over 2 characters"):a.username="Required",t.email?t.email.length<6&&(a.email="Email must be over 5 characters"):a.email="Required",t.password?t.password.length<6&&(a.password="Password must be over 5 characters"):a.password="Required",t.confirm?t.confirm!==t.password&&(a.confirm="Must match"):a.confirm="Required",e.state.errorFromServer){case"Username already exists":a.username="Username already exists";break;case'"email" must be a valid email':a.email="Email must be a valid";break;case"Email already exists":a.email="Email already exists"}return a},render:function(t){var a=t.handleSubmit,r=t.form,o=t.submitting,s=t.pristine;t.values;return n.a.createElement(D.a,{onSubmit:function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a(n);case 3:return r.reset(),t.next=6,e.setState({visible:!1,errorFromServer:""});case 6:alert("You have successfully registered!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data),e.setState({errorFromServer:t.t0.response.data});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},e.state.visible?null:r.reset()," ",n.a.createElement(C.a,{name:"username"},(function(t){var a=t.input,r=t.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Username"),n.a.createElement("input",Object.assign({},a,{type:"text",placeholder:"Username",onClick:e.usernameChange,className:r.error&&r.touched?O.a.errorField:""})),r.error&&r.touched&&n.a.createElement("span",{className:O.a.error},r.error))})),n.a.createElement(C.a,{name:"email"},(function(t){var a=t.input,r=t.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Email"),n.a.createElement("input",Object.assign({},a,{type:"text",placeholder:"Email",onClick:e.emailChange,className:r.error&&r.touched?O.a.errorField:""})),r.error&&r.touched&&n.a.createElement("span",{className:O.a.error},r.error))})),n.a.createElement(C.a,{name:"password"},(function(e){var t=e.input,a=e.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Password"),n.a.createElement("input",Object.assign({},t,{type:"password",placeholder:"Password",className:a.error&&a.touched?O.a.errorField:""})),a.error&&a.touched&&n.a.createElement("span",{className:O.a.error},a.error))})),n.a.createElement(C.a,{name:"confirm"},(function(e){var t=e.input,a=e.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Confirm password"),n.a.createElement("input",Object.assign({},t,{type:"password",placeholder:"Confirm password",className:a.error&&a.touched?O.a.errorField:""})),a.error&&a.touched&&n.a.createElement("span",{className:O.a.error},a.error))})),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:O.a.row},n.a.createElement(S,{type:"submit",disabled:o||s},"Register"))))}}))))}}]),t}(n.a.Component),A=a(42),F=new function e(){Object(m.a)(this,e),this.history=null,this.history=Object(A.a)()},U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).logout=function(){window.confirm("Are you sure you wish to logout?")&&(a.props.logout(),F.history.push("/"))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(S,{onClick:this.logout},"Logout")}}]),t}(n.a.Component),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){return F.history.push("/private")},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(S,{onClick:this.handleClick},"Private Cabinet")}}]),t}(n.a.Component),T=a(39),L="LOGIN",R="LOGOUT",M=function(e,t){return{type:L,token:e,id:t}},V=a(458);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).authenticate=Object(u.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.token,e.next=3,x()("/user/isAuth",{headers:{"auth-token":t}});case 3:(r=e.sent.data)!==a.state.isAuth&&(r?a.setState({isAuth:r}):a.setState({isAuth:!1}));case 5:case"end":return e.stop()}}),e)}))),a.handleClickToLogo=function(){return F.history.push("/")},a.state={token:e.token,isAuth:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticate();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticate();case 2:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.login,a=e.logout;return n.a.createElement("div",{className:O.a.root},n.a.createElement("div",{onClick:this.handleClickToLogo,className:O.a.title},"WISHERY"),n.a.createElement("div",{className:O.a.buttonSet},n.a.createElement(V.a,{text:"Account"},n.a.createElement(V.a.Menu,{direction:"left"},this.state.isAuth?n.a.createElement(n.a.Fragment,null,n.a.createElement(V.a.Item,null,n.a.createElement(I,null)),n.a.createElement(V.a.Item,null,a&&n.a.createElement(U,{logout:a}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(V.a.Item,null,t&&n.a.createElement(P,{login:t})),n.a.createElement(V.a.Item,null,n.a.createElement(N,null)))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.token;return a?a!==t.token?q({},t,{token:a}):null:q({},t,{isAuth:!1})}}]),t}(n.a.Component),G=Object(T.b)((function(e){var t=e.accountStore;return{id:t.id,token:t.token}}),(function(e){return{login:function(t,a){return e(M(t,a))},logout:function(){return e({type:R})}}}))(Y),W=a(460),J=a(459),X=function(e){var t=e.title,a=e.author,r=e.description,o=e.url,s=e.style,c=e.theme;return n.a.createElement(J.a,{style:s,href:o,header:t,meta:"".concat(a,", theme: ").concat(c),description:r,fluid:!0})},z=a(60),H=a.n(z);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={data:[],isAuth:!1,isDataEmpty:!1},a.handleUpdate=function(e){F.history.push("/posts/update/".concat(e))},a.handleDelete=function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure want to delete this wish?")){e.next=6;break}return r=a.state.data.filter((function(e){return e._id!==t})),a.setState({data:r}),e.next=6,x.a.delete("/posts/".concat(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.id,r=t.token;x()("/private/".concat(a),{headers:{"auth-token":r}}).then((function(t){e.setState({isAuth:!0})})).catch((function(t){e.setState({isAuth:!1})}))}},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,n,o,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,n=r.id,o=r.token,s=this.state,c=s.data,!s.isDataEmpty){e.next=4;break}return e.abrupt("return",null);case 4:if(0!==c.length){e.next=15;break}return e.prev=5,e.next=8,x()("/private/".concat(n),{headers:{"auth-token":o}});case 8:0!==(i=e.sent.data).length?this.setState({data:i}):this.setState({isDataEmpty:!0}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),e.t0.response.status,this.state.isAuth&&this.setState({isAuth:!1});case 15:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.isAuth?n.a.createElement(n.a.Fragment,null,this.state.isDataEmpty?n.a.createElement("div",null,n.a.createElement("h2",null,"You have not any wishes :("),n.a.createElement("div",{className:H.a.addButton},n.a.createElement(S,{onClick:function(){return F.history.push("/posts/add")}},n.a.createElement("span",{className:H.a.plus},"+"),"Add new Wish!"))):this.state.data.length>0?n.a.createElement("h2",null,"Here you can Update & Delete your Wishes"):null,this.state.data.map((function(t){return n.a.createElement("div",{className:H.a.container,key:t._id},n.a.createElement(X,{style:{marginBottom:0},theme:t.theme,url:"/posts/".concat(t._id),author:t.author,title:t.title}),n.a.createElement("div",{className:H.a.button},n.a.createElement("button",{className:H.a.delButton,onClick:function(){return e.handleUpdate(t._id)},title:"Update!"},n.a.createElement("i",{className:"material-icons"},"update"))),n.a.createElement("div",{className:H.a.button},n.a.createElement("button",{className:H.a.delButton,onClick:function(){return e.handleDelete(t._id)},title:"Delete!"},n.a.createElement("i",{className:"material-icons-outlined"},"delete_forever"))))}))):n.a.createElement("h1",null,"403 forbidden")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return Z({},t,e.token?{isAuth:!0}:{isAuth:!1})}}]),t}(n.a.Component),$=Object(T.b)((function(e){var t=e.accountStore;return{id:t.id,token:t.token}}))(K),ee=a(455),te=function(e){var t=e.onChange;return n.a.createElement(ee.a,{onChange:t,icon:"search",placeholder:"Search..."})},ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={data:[],selectValue:"",inputValue:""},a.handleSelectChange=function(e){console.log(e.target.value),a.setState({selectValue:e.target.value})},a.handleInputChange=function(e){console.log(e.target.value),a.setState({inputValue:e.target.value})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("/");case 2:(t=e.sent.data).reverse(),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,r=t.selectValue,o=t.inputValue,s=a.filter((function(e){return""!==o?e.title.toLowerCase().includes(o.toLowerCase()):e})).filter((function(e){return r?e.theme===r:e}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{display:"inline-block",marginRight:"1em"}},n.a.createElement(te,{onChange:function(t){return e.handleInputChange(t)}})),n.a.createElement(D.a,{style:{width:"10em",display:"inline-block"}},n.a.createElement("label",null,"Theme of wishes: "),n.a.createElement("select",{onChange:function(t){return e.handleSelectChange(t)}},n.a.createElement("option",{value:""},"All"),n.a.createElement("option",{value:"Drink"},"Drink"),n.a.createElement("option",{value:"Walk"},"Walk"),n.a.createElement("option",{value:"Cinema"},"Cinema"),n.a.createElement("option",{value:"Concert"},"Concert"),n.a.createElement("option",{value:"Outdoors"},"Outdoors"),n.a.createElement("option",{value:"Chill"},"Chill"),n.a.createElement("option",{value:"Travel"},"Travel"),n.a.createElement("option",{value:"Game"},"Game"),n.a.createElement("option",{value:"Other"},"Other"))),s.map((function(e){return n.a.createElement(X,{author:e.author,url:"/posts/".concat(e._id),theme:e.theme,title:e.title,key:e.author+e.description+e.title})})))}}]),t}(n.a.Component),re=a(249),ne=a(457),oe=a(462),se=a(447),ce=a(245),ie=a.n(ce),le=function(e){var t=e.author,a=e.text,r=e.date;return n.a.createElement(ne.a,null,n.a.createElement(ne.a.Content,null,n.a.createElement(ne.a.Author,{as:"a"},t),n.a.createElement(ne.a.Metadata,null,n.a.createElement("div",null,n.a.createElement(ie.a,{format:"D MMM YYYY",withTitle:!0},r))),n.a.createElement(ne.a.Text,null,a)))};function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var pe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={textareaValue:"",data:[],isAuth:!1},a.handleSubmit=Object(u.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state.textareaValue,r=a.props.token,!t||!r){e.next=7;break}return e.next=5,x.a.post("/comments/".concat(a.props.postId),{author:a.props.id,text:t},{headers:{"auth-token":r}});case 5:n=e.sent.data,a.setState({data:[].concat(Object(re.a)(a.state.data),[n]),textareaValue:""});case 7:case"end":return e.stop()}}),e)}))),a.handleTextAreaChange=function(e){a.setState({textareaValue:e.target.value})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("/comments/".concat(this.props.postId));case 2:return null!==(t=e.sent.data)&&this.setState({data:t}),a=this.props.token,e.next=7,x()("/user/isAuth",{headers:{"auth-token":a}});case 7:if(!(r=e.sent.data)){e.next=10;break}return e.abrupt("return",this.setState({isAuth:r}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.login;return n.a.createElement(ne.a.Group,{className:b.a.comments},n.a.createElement(oe.a,{as:"h3",dividing:!0},"Comments"),this.state.data?this.state.data.map((function(e){return n.a.createElement(le,{key:e.date,author:e.author,text:e.text,date:e.date})})):n.a.createElement("p",null,"You will be the first!"),this.state.isAuth?n.a.createElement(D.a,{reply:!0},n.a.createElement(D.a.TextArea,{onChange:function(t){return e.handleTextAreaChange(t)},value:this.state.textareaValue,placeholder:"Type your reply here"}),n.a.createElement(se.a,{content:"Add Reply",labelPosition:"left",icon:"edit",primary:!0,onClick:this.handleSubmit})):n.a.createElement("div",{className:b.a.buttonContainer},t&&n.a.createElement(P,{login:t})," or ",n.a.createElement(N,null),"to leave a comment"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return me({},t,e.token?{isAuth:!0}:{isAuth:!1})}}]),t}(n.a.Component),he=Object(T.b)((function(e){var t=e.accountStore;return{id:t.id,token:t.token}}),(function(e){return{login:function(t,a){return e(M(t,a))}}}))(pe),de=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={data:{_id:"",author:"",description:"",title:"",theme:"",date:""},comments:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("/posts/".concat(this.props.match.params.id));case 2:t=e.sent.data,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,t=e.author,a=e.description,r=e.title,o=e.theme;return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,{author:t,description:a,title:r,theme:o}),n.a.createElement(he,{postId:this.props.match.params.id}))}}]),t}(n.a.Component),fe=function(){return n.a.createElement("div",{className:b.a.footer},"\xa9 Wishery")},ve=function(){return n.a.createElement("h1",null,"404 Not found")},be=a(43),ye=a.n(be);function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ge=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={isAuth:!1,updating:!1,data:{description:"",title:"",theme:""}},a.onUpdate=function(){var e=Object(u.a)(l.a.mark((function e(t){var r,n,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.author,n=t.title,o=t.description,s=t.theme,e.prev=1,e.next=4,x.a.put("/posts/".concat(a.props.match.params.id),{author:r,title:n,description:o,theme:s});case 4:alert("Updated successfully!"),F.history.push("/private"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Something goes wrong! Try again!"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.onSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var r,n,o,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.author,n=t.title,o=t.description,s=t.theme,c=a.props.token,console.log(t),e.prev=3,e.next=6,x.a.post("/posts/",{author:r,title:n,description:o,theme:s},{headers:{"auth-token":c}});case 6:F.history.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),alert("Something goes wrong! Try again!"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.token,e.next=3,x()("/user/isAuth",{headers:{"auth-token":t}});case 3:if((a=e.sent.data)&&this.setState({isAuth:a}),this.props.match.params.id&&this.setState({updating:!0}),!this.state.updating){e.next=11;break}return e.next=9,x()("/posts/".concat(this.props.match.params.id));case 9:r=e.sent.data,this.setState({data:r});case 11:console.log(this.state);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.author,t=this.state,a=t.data,r=a.title,o=a.description,s=a.theme,c=t.updating;return t.isAuth?n.a.createElement("div",{className:ye.a.root},n.a.createElement(C.b,{onSubmit:c?this.onUpdate:this.onSubmit,initialValues:{author:e,title:r,description:o,theme:s},validate:function(e){var t={};return e.title||(t.title="Required"),e.description||(t.description="Required"),e.theme||(t.theme="Required"),t},render:function(e){var t=e.handleSubmit,a=e.submitting,r=e.pristine;return n.a.createElement(D.a,{onSubmit:t},n.a.createElement(C.a,{name:"title"},(function(e){var t=e.input,a=e.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Your wish"),n.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Type your wish here!",className:a.error&&a.touched?ye.a.errorField:""})),a.error&&a.touched&&n.a.createElement("span",{className:ye.a.error},a.error))})),n.a.createElement(C.a,{name:"description"},(function(e){var t=e.input,a=e.meta;return n.a.createElement("div",null,n.a.createElement("label",null,"Description"),n.a.createElement("textarea",Object.assign({},t,{placeholder:"Add some description to your wish!",className:a.error&&a.touched?ye.a.errorField:""})),a.error&&a.touched&&n.a.createElement("span",{className:ye.a.error},a.error))})),n.a.createElement(C.a,{name:"theme"},(function(e){var t=e.input,a=e.meta;return n.a.createElement("div",{className:ye.a.select},n.a.createElement("label",null,"Theme of your wish"),n.a.createElement("select",Object.assign({},t,{placeholder:"Choose theme of your wish",className:a.error&&a.touched?ye.a.errorField:""}),n.a.createElement("option",null),n.a.createElement("option",{value:"Drink"},"Drink"),n.a.createElement("option",{value:"Walk"},"Walk"),n.a.createElement("option",{value:"Cinema"},"Cinema"),n.a.createElement("option",{value:"Concert"},"Concert"),n.a.createElement("option",{value:"Outdoors"},"Outdoors"),n.a.createElement("option",{value:"Chill"},"Chill"),n.a.createElement("option",{value:"Travel"},"Travel"),n.a.createElement("option",{value:"Game"},"Game"),n.a.createElement("option",{value:"Other"},"Other")),a.error&&a.touched&&n.a.createElement("span",{className:ye.a.error},a.error))})),n.a.createElement("div",{className:ye.a.button},n.a.createElement(se.a,{type:"submit",disabled:a||r},"Submit")))}})):n.a.createElement("div",null,n.a.createElement("h1",null,"403 forbidden"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.token;return a?a!==t.token?Ee({},t,{token:a,isAuth:!0}):null:Ee({},t,{isAuth:!1})}}]),t}(n.a.Component);function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ke=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={isAuth:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.token,e.next=3,x()("/user/isAuth",{headers:{"auth-token":t}});case 3:if(!(a=e.sent.data)){e.next=6;break}return e.abrupt("return",this.setState({isAuth:a}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:b.a.root},n.a.createElement(G,null),n.a.createElement("div",{className:b.a.body},n.a.createElement("div",{className:b.a.content},n.a.createElement(W.c,null,n.a.createElement(W.a,{path:"/private"},n.a.createElement($,null)),n.a.createElement(W.a,{exact:!0,path:"/posts/add",render:function(t){return n.a.createElement(ge,Object.assign({},t,{author:e.props.id,token:e.props.token}))}}),n.a.createElement(W.a,{exact:!0,path:"/posts/update/:id",render:function(t){return n.a.createElement(ge,Object.assign({},t,{author:e.props.id,token:e.props.token}))}}),n.a.createElement(W.a,{exact:!0,path:"/"},this.state.isAuth?n.a.createElement("div",{className:b.a.addButton},n.a.createElement(S,{onClick:function(){return F.history.push("/posts/add")}},n.a.createElement("span",{className:b.a.plus},"+"),"Add new Wish!")):null,n.a.createElement(ae,null)),n.a.createElement(W.a,{exact:!0,path:"/posts/:id",component:de}),n.a.createElement(W.a,{path:"*",component:ve}))),n.a.createElement(fe,null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.token;return a?a!==t.token?we({},t,{token:a,isAuth:!0}):null:we({},t,{isAuth:!1})}}]),t}(n.a.Component),Se=Object(T.b)((function(e){var t=e.accountStore;return{id:t.id,token:t.token}}))(ke),_e=a(83);function xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xe(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,r=Object(j.a)(t,["type"]);switch(a){case L:return Ce({},e,{},r);case R:return Ce({},e,{id:void 0,token:void 0});default:return e}},Pe=Object(_e.b)({accountStore:De}),Ne=function(){try{return JSON.parse(localStorage.getItem("store"))||void 0}catch(e){return void console.log(e)}}(),Ae=Object(_e.c)(Pe,Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Ae.subscribe((function(){var e;e={accountStore:Ae.getState().accountStore},localStorage.setItem("store",JSON.stringify(e))}));var Fe=Ae;s.a.render(n.a.createElement(T.a,{store:Fe},n.a.createElement(W.b,{history:F.history},n.a.createElement(Se,null))),document.getElementById("root"))},60:function(e,t,a){e.exports={container:"styles_container__12GUv",plus:"styles_plus__2IgyS",addButton:"styles_addButton__A52lo",button:"styles_button__1RiNJ",delButton:"styles_delButton__1EiL0"}}},[[260,1,2]]]);
//# sourceMappingURL=main.4e243e58.chunk.js.map