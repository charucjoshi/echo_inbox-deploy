"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[561],{4373:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(5294);const o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await(0,a.Z)({method:e.method,url:"".concat("","/").concat(e.endpoint,"/").concat(n),data:t})};var s=n(2791);const i=e=>{const[t,n]=(0,s.useState)(null),[a,i]=(0,s.useState)(""),[c,r]=(0,s.useState)(!1);return{call:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),i(""),r(!0);try{let s=await o(e,t,a);n(s.data)}catch(s){i(s.message)}finally{r(!1)}},response:t,error:a,isLoading:c}}},7561:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(2791),o=n(7630),s=n(4395),i=n(697),c=n(6098),r=n(4663),l=n(7607),A=n(2167),d=n(4035),g=n(2155),m=n(9692),x=n(5652);var p=n(184);const u=(0,o.ZP)(s.Z)({background:"#303234",boxShadow:"none"}),F=(0,o.ZP)(i.Z)({display:"flex",alignItems:"center",marginLeft:430,minWidth:690,maxWidth:720,height:48,borderRadius:8,justifyContent:"space-between",padding:"0 20px","& > div":{width:"100%",padding:"100px 10px",display:"flex",alignItems:"center"}}),h=(0,o.ZP)(c.ZP)({color:"#FFFFFF",display:"flex",alignItems:"center"}),Z=(0,o.ZP)(i.Z)({display:"flex",alignItems:"center",width:"100%",justifyContent:"end","& > svg":{margin:20}}),j=e=>{let{toggleDrawer:t}=e;return(0,p.jsx)(u,{position:"static",children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAACZCAYAAAC7SCaVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABN5SURBVHhe7d0HdJVFFgfwSw8tLEVQUGmCIEhHQKQpsFSREnovAakrSAklhN5raKH3GnoPKHWFlSrqgjSldxBCT4B9d5y4Ce9982qS7w3/354cZl44OYvn8Ge++ebeSZCiYuZXBACgoYTyVwAA7SDgAEBbCDgA0BYCDgC0hYADAG0h4ABAWwg4ANAWAg4AtIWAAwBtIeAAQFsIOADQFgIOALSFgAMAbSHgAEBbCDgA0JbH+8E92nFFjgAAXJeyUhY5ch1WcACgLQQcAGgLAQcA2kLAAYC2EHAAoC0EHABoCwEHANpCwAGAthBwAKCteKtk8MQpZU8Z2WEgdanrL2fG+swIouDVs+QMAFwRlxmBFRwAaAsBBwDaQsABgLYQcACgLQQcAGgLAQcA2kLAAYC2EHAAoC0EHABoCwEHANpCwAGAthBwAKAtBBwAaAsBZ3Hl1lU5UsvyVmY5AgBvgHZJFl3qtqORHYLkzFjw6pnUZ8YgOTOHfNnzWL7yUu73clKud3NSet+0lCxpMkqWJCkltXzxrz5JfSh5Mh9KmjgpJUqYkBLwV4IE9OrVK4qMjKSIFxH06++naOaGBbRu32b5kwFiR1xmBALOwpsCLk/W3FS5eAXxVTxPYUqVIpX8jmcc+e049Q0ZQvt/Pig/AfAs9IODv3GIda3nT0sCZ9L5FcfoyOxdNKJ9IFUoUsbj4caKfliIQofOp+zvZJWfAHgvBJwJFctTSKwozyw7QruDN1kCbSB9VaY6ZUqXUf6O2JU6RWqa0GWYnAF4LwSciZQrVJqWB82hPcGbxWNz5gxvy+/EvUqWR+CGX9SVMwDvhIAzgfqf16bt41fTljErqWbpKvLT+Fe+cGk5AvBOCLh45FehFh0M2UHzAqbQZx+XlJ+aR8mPiskRgHfCW1SLuH6LWipfcRrYujeVKVBKfuK6p8+f0dHTP9GJc7/S6Ytn6fTlc/TM8hl//jzyOT2PiLB8WX61jJ/xr5b5ixeR9Mryv4QJElKaVL5ir89I+uo5xM8C8BQcE4ljcRlwH2TJTj/MCKOUPinkJ867fOsqrdmzkcIO7aJdR/fJT113bd0p8k2ZWs5ieuerPPTgUbicAbgPx0Q01qZGM7fCjZ29fJ4CQgZ7JNxYRGSEHFlLkjiJHAF4HwRcHMtpWcGZSfo06cSXLS9fvaS7D+7JGYD3QcDFsTOXzsmRbfw4OGHFNLp257r8xNr2H7+TI/eVzl9Cjqydu/y7KOcC8FYIuDjG9Z5/PrwvZ/8X/jicBs4dSdn8ClD/2cPIN6Wv/I61+VuXyZH7mlVpIEfWzl75XY4AvBMCLo5duHGJavRqaFmFfU9Pnj2l63dvihVbniYlaOyyYPGmk99uGu3TvXj5wmOb/g2+qEPVSlaSM2t7ju+XIwDvhICLB8fOnKA6/ZpRhho5KWeDwmLFFn1Vx3tfRjj8POHD93PRCP8BcmaNg3Th9hVyBlHez/QuNansJ/5xMNq7BPNAwJmUUchxmyP+ckfWTO/RkgEhytrWRZZwu//wgZwB61i7DZ1c/B+a2XMize0TTKeXHhZVKGBeCDiLK7euyZFaXDa8VG3uu7OK40PG28aFUt5sH8pPrD2PjKDxy6fKGbDqpSrTmI6D5ewvPkmT0axeE+ntOGqCAM5DwJnUy5eKgEvo2gquc512tHPiOvGYpdI3ZDCdu/qHnEHOzNloxrfj5SymxIkSU5USFeUMzAYBZ1KqfTjLQ6ocOYb/gq4aMp9GfW2/WmPLwR00fd1cOfMs7i7MHVLy58hr2G8uaeIksba3xSutisXKUze/DtSzUVcqmc+xWtvplnBL55tWzqzxnwvMCaVaFnXK1qBFA0LkzNiavZuo2ZD2cha77mw+Lx6BbElXLbt42+oILkMLah1g+LOi+/HkUarW00+83fWUj7LlocCWPalC4c+sGnR+f2QvJUqUiNKm/sdfX6nS/P17bty9SQf/e5j2/XSAZm1cSJEvIsXnruBgr1e+ls1HyXHLp1DgnBFyZm1i1xHUrmZzObPtE/8vRMt3cAxKtcBtvGfEzTK5xtaRcDv5x2/UfGgHj4ab2O8bu0q0gLLVffjzomVFD7wCOfPRexmzxPg9/AKk1mfVaGynIXRuxVEKaPqN/I5zlg6cJR7NjfbJejTsTP/85HM5i6lF1UZ2w23E4gkINxNDwGmmTMFStGbYIlo5eJ5od+6I747soco96tKlm479y+oIbv+0fuRSjzxuZkiTnvq3+NYSlqFObehzwHJI2jM3YIp4bI6OA3a44hgN2/TDdhq6YKycgRkh4DTBdynwaoVDwGhFYsvUtbPpyz6NPVpzmu3t90VouNtU4HUc3mET1oozfI7IkSWbHKn9w/JoHDZuDVWO9t9tuH9/8bmRP65fpE7je8oZmBUCzqRUZ92iHyHhTfsp34ymvVM2O7RaiXL7/h0KmjuKrt6+Tv5fthCPiZ4yp08wZXnrHTnzLH5hMqmr8Z5ZdBevX5Yj+7gv3lrLyrdl1cZiT9Zeu/YOY7uL/4Zgbgg4k+L7S428lAHH+0O/LDxArao1EXNn8GNfUOveNKxdf5rQZTgdmBEmDq7yWS93buvq3aSbw28nXcUruX7Ne8iZsX0nDtCOQ7vkzDFTu4+hYMs/GCrdg/uJlx9gfgg4E0qSOLE4X2WLuKz5RSR9mv8T8YbPk0cUeNXFp/WPzdkjSpGcxZdQB7bsJWe23frzNp26cFq8QbWFS8QcwUFq1KQzukaD2tLCbcv/fnlir5sLUz2abj24k0I2zJczMDsEnAml8zXemI/aK6tTrqb4NTbwYy+XIvFbRGd0b9BRjmzjBgPZ/ApS0bYVqGafRqIOt2pPPyrTqRrlb/4pZa6dl3z/+T5lrJmL/Mf8SxlGiRImoiaV/OTMGAfb1+N6iLpf/tl+gS1FgwNX9Z05RI7AGyDgTIjPhBmJCjh+xIxt07qPjbHxrsIHYVX7Vtx6qdWITnL2Fw6avcd/EHdK/H7twt+1r4+ePqYlYauoUvc6yooKZ+tAeXV45vJ5qt6rgVhFOmvw/NF0+tJZOQNvgIAzIdW5Nf7Lz/iSmbgwrtNQOVJrUqmeHNk2eN4op4v3+XE2cPZwObPGF2TzSs5ZHG4ccgd+PSQ/se/QqWM0askkOQNvgYAzIVXARd1wNXXNLPrl/Ekxjk05Mmel9l+2lDNjqnpM3m9bvWejnDln3b7NhkdYuOlAkdwF5Mw5vHqs0qMerd27WX6i1mNKfzkCb4KAM6HECW2/YGARL/66IIZLtWoFNKalO0LF3FH8iMYb5dxZePTSyTRx5XQ68ttx+V3bOtZpK0fGSuYrLkfWFoWtlCPX8COsEaOaVkfwy5qmQ/wdaiyQ0M0WVRA/EHBejFch7UZ3o/frfUw9pwXS7E2LxIpk5+HdFLp7A83ZtFh0Cebfwxv5vNFeqFUZqjegBX0T3JcGWR4b+80aSmU7V6fg1bPkT7XGVx3yG1IjJT4qarjq5KYB6/ZukjPXqFqnZ8noXgsr/nPx2Tp77L0dBnNCwFlcue1gP7gMsXN49XV8KbMRWweA79y/S9PWzqFuk/qIFUmtgCbUYtjX1HVSb3HPA6/yeBWkqjPtMyNIbPQb+aJoWTmyVjxPETmyduCXQ6K/nDtU/foyKN44O+LbRl3kSI3rZl05bwjxCwFnQqpml862SnLG+n1b5MjaxzmMKx2KKWpeDzqxkW/kybMncmQtqRvnAMsX/ozqV/hKzuzj2tR30meSM/AGCDgTUt7JoKhwcJfqraKqaL6wYqP/4K+H5ch1qoup3Qk4e+f2XscHiwe36Stn4A0QcCaUQlGk/tSD7Yxepyq4Nzqbx6f+eY/OCPeYc5fqdn1V+KlUKFLG8thdTs4c17hSPdGKCrwDAs6EVF04os7BxQZVgTyfSbOlwAfGj668p+eJgnSfZD5yZC0i0rVGmD0d3HuzBS8cvAcCzoQyps0gR9ZsXRrtKUVyF5Qja5dvXZWjmFSb/J46jJw5/dtyZM0oeFUaVawnGm0a4SM0qiaW3Duuaz1/OQMzQ8CZUKa0xk0duZV3bFH9pTeqC02jKEz31LWDeRT937jdkzO4xG1Yu35yZtvk0BAKCIl5g9br+jXrgdu0vAACzoRUG/o37zm/YnEEN8ws+EF+ObO2+/i/5SgmVUcPT602S+Y3PkT8x3Xjoy22jOk4SHkf7OTQmeLRmrscq84GckupQW0C5AzMCgFnQukVj32379+VI8/i29qNXLhxSdzZ4KyXL43fBjuK2zalSJZczmLisjVn3tJWK1lJWaDPgTxyyQQ5Ixo4Z7iyjXvTyvVpedAcOQMzQsCZkGpVdC/cc63Fo/CjlqredM1u1+pIPcG/Zgs5snbglx/lyDF8wYzKiEUTYjxWczncoHnq5pd8oY4jtboQPxBwJuRIsb0ndW8Ys43R65Z/v0aOrL1UNKhM6EKnj+h4I1/VHZivcXQUr1BVP2vbf76jKWusH0mX7QylzQfC5My2soU+lSMwGwScCSVLYhxwzyI8G3B8b2mn2sbF9NykUtW1JPKFccAlTuR6wFUtWZFGtB8oZ9YePnlEi7evkDP7ejf5lxxZ4z5xvaYFypk1LndTUVVaQPxCwHkZVRmXK+y9UZyxfp4c2aY6l6c6I6dSqXgFmt93mpzZNnvjQodrXLmGVFVQP275VGVHEd5/rB/YyvDM3Yb92+QIzAYBZ0LOFtu7qmu99sqOvdzHLcyyglM5dvqEHFnju1H57awz+JLmdcMXU6rkKeUn1vgtp71VVXS8T2aEqzf4dnt7+DG1Rq8G4oVLdCMXT6QN/94qZ2A2CDgTUr195CaPnsBlSiPaGz+WMe4XZ8/P5/+rXMVtHbtK7KUZlXMlT+Yjrizk6/p2Td5Io74Okt8xFmQJN+7l5gi+DlB1TywHFD/uOmL/zwfpo6YlqcHA1tR2VDfRemrIgjHyu2BGCDiT4bsNVLc6udKi+3V5s31I8wLUq5bFYSvFtXuO4DNjRrjsjPfSfpq/n8LDLtGNDafp+vpTdGvTWXqw/SLd3nROXFnI1/V9kte47VKU8Sumil53juLb7Y08fvbE7iO4LXyjPb984OahYG4IOBPpUKsVXQg9oWwu6S4O0IX9pikPE3O1RJ8Zg+TMPkce8RivPvnRM3WK1OJsm7NhvXLXOhqguKPBFt+UvnJkbcuBHQ5fUwjeCQFnYVRn+bp333Kve6wK33M6rvNQu4+gzyOfy5Hz+GcvGTBTvDlV4XC7F/6nnNl3+NRxmrt5sZzFDg63VsPVx1lsOapox77HoDoD9IGAM4mvylaXIzU+fOqqJQNn2j2zxeVJHCbOCpwzgo6dMX7h4A4ufncl3Bi3O7d1Gxa/PIntUIb4h4AzidTJU8mRmivdM9icPpPpy9JV5cw2fmvKrctdwSu+8l1qir0pT+E7J1oO7yjuj3AH32fabEh7sXe35eAOCggZRLX7NZPfBZ0h4Ezi/FXHisZv3rslR46b3mOc8lJmxkcv2o7uJmeu4Teb/Hax17SBbm3A859xzLLJVLRNeVq1a7381D1c9cD3VPgNaCkK6uHNgIAzicu3jIu6o3BFgbMNHhcNCKHmVRrKmW18YLadJZg81Ypp6trZ4ghFk8H+tGDrMnFpstFREi4940tz9v10QLQp4hDKXr8QBc0dFau97+DNkCBFxcwePRr/aIf9v6gsZaUschT/uJPt6aX2u1Lw7U65GxvXM7qDS5NChyyQM9v4akC+PcsR/CJhWo+xVFxxIUwUflyzd6DXE/itaXKf5OLinMgXEfQ8IgJvMd9AcZkRWMGZxA92OmOEPw53eFOcu1vsm7rFoXDjVVZchBvjMHv4+KH4s/AVhgg3iG0IOJPgNj3hlr/8Rmasn2+3kwjXcG4bG0rjuwxTdiSJwuG2bt9mOQPQDwLORFT3AHA5ky38eN22RjPaOXGdqOEsU7CU/I4xLthvGNQG4Qbawx6chRn24NjojoOUrYv4QO2uY3stAUWUM0t2yps1l91Du6978CicGg1qS7uP7ZefAMQt7MG9oeZuXiJHthXLU4h6NupKvRp3pbrlajodbnzLVdWefgg3eGMg4Ezk1IXTThWSO4MP4JbtXI2On/lZfgKgPwScyXAlgeqiE2fxxcvtRncTB3BdvSQZwFsh4Ezm2p0b1H7MN3Lmnokrp1Ph1uVo6Q7PlU8BeBMEnAlxl4taAU3EI6uzuMxp0qoZlLdpCeo3a6joWAvwpkLAmdTOw7upWLvPxSqM396qcB3p/K1LqfnQDqLMqe/MIXTxxmX5XYA3F46JWJjlmIhK4VwFqPTHJcgnmY8odXr09BGdtKzweJXHj7UA3iIuMwIBJ3nr/28Ab4NzcAAAHoCAAwBtIeAAQFsIOADQFgIOALSFgAMAbSHgAEBbCDgA0BYCDgC0hYADAG0h4ABAWwg4ANAWAg4AtBVv3UQAAFTQTQQAQAEBBwDaQsABgLYQcACgLQQcAGgLAQcA2kLAAYC2EHAAoC0EHABoy+OVDAAAZoEVHABoCwEHANpCwAGAthBwAKAtBBwAaAsBBwDaQsABgLYQcACgLQQcAGgLAQcA2kLAAYC2EHAAoC0EHABoCwEHANpCwAGAthBwAKAtBBwAaAsBBwDaQsABgLYQcACgLQQcAGiK6H/iPq8DH0y3gQAAAABJRU5ErkJggg==",alt:"logo",style:{height:40,widht:40,marginRight:10}}),(0,p.jsx)(l.Z,{cursor:"pointer",onClick:t}),(0,p.jsxs)(F,{children:[(0,p.jsx)(A.Z,{}),(0,p.jsx)(h,{placeholder:"What's on your mind?"}),(0,p.jsx)(d.Z,{})]}),(0,p.jsxs)(Z,{children:[(0,p.jsx)(g.Z,{}),(0,p.jsx)(m.Z,{}),(0,p.jsx)(x.Z,{})]})]})})};var w=n(9953),b=n(4294),f=n(493),C=n(4852),v=n(5905),B=n(4287),P=n(3026),L=n(2192),S=n(3513),y=n(9825),H=n(8265);const Q=[{name:"inbox",title:"Inbox",icon:B.Z},{name:"starred",title:"Starred",icon:P.Z},{name:"sent",title:"Sent",icon:L.Z},{name:"drafts",title:"Drafts",icon:S.Z},{name:"bin",title:"Bin",icon:y.Z},{name:"allmail",title:"All Mail",icon:H.Z}];var D=n(9818),O=n(890),k=n(539),q=n(6739),X=n(4373),T=n(5372);const V={height:"88.5%",width:"80%",maxWidth:"100%",maxHeight:"100%",borderRadius:"10px 10px 0 0",background:"#303234",color:"#FFFFFF"},G=(0,o.ZP)(i.Z)({display:"flex",justifyContent:"space-between",padding:"10px 15px",background:"#063010","& > p":{font:14,fontWeight:600}}),I=(0,o.ZP)(i.Z)({display:"flex",flexDirection:"column",padding:"0 15px","& > div":{color:"#FFFFFF",fontSize:14,borderBottom:"1px solid #000000",marginTop:10}}),K=(0,o.ZP)(i.Z)({display:"flex",justifyContent:"space-between",marginBottom:0,paddingRight:15,paddingLeft:10,alignItems:"center","& .MuiButtonBase-root":{color:"#fff"}}),z=(0,o.ZP)(b.Z)({background:"#063010",borderRadius:500,radius:5,fontWeight:500,textTransform:"none",width:100}),U=e=>{let{openDialog:t,setOpenDialog:n}=e;const[o,s]=(0,a.useState)({}),i=(0,X.Z)(T.Y.saveSentEmail),r=(0,X.Z)(T.Y.saveDraftEmails),l={Username:"ccjdev@yopmail.com",Password:"6527D253C92B314C7A52BCACC658AEDF849E",Host:"smtp.elasticemail.com",Port:2525},A=e=>{s({...o,[e.target.name]:e.target.value})};return(0,p.jsxs)(D.Z,{open:t,PaperProps:{sx:V},children:[(0,p.jsxs)(G,{children:[(0,p.jsx)(O.Z,{children:"New Message"}),(0,p.jsx)(q.Z,{font:"small",onClick:e=>(e=>{e.preventDefault();const t={to:o.to,from:"ccjoshi07@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"Charu Joshi",starred:!1,type:"drafts"};r.call(t),r.error||(n(!1),s({})),n(!1)})(e)})]}),(0,p.jsxs)(I,{children:[(0,p.jsx)(c.ZP,{placeholder:"Recipient",name:"to",onChange:e=>A(e)}),(0,p.jsx)(c.ZP,{placeholder:"Subject",name:"subject",onChange:e=>A(e)})]}),(0,p.jsx)(k.Z,{name:"body",multiline:!0,rows:23,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"},"& .MuiInputBase-input":{color:"#FFFFFF"}},onChange:e=>A(e)}),(0,p.jsxs)(K,{children:[(0,p.jsx)(z,{onClick:e=>(async e=>{e.preventDefault(),window.Email&&window.Email.send({...l,To:o.to,From:"ccjoshi07@gmail.com",Subject:o.subject,Body:o.body}).then((e=>alert(e)));const t={to:o.to,from:"ccjoshi07@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"Charu Joshi",starred:!1,type:"sent"};i.call(t),i.error||(n(!1),s({})),n(!1)})(e),children:" Send "}),(0,p.jsx)(y.Z,{onClick:()=>n(!1)})]})]})};var M=n(7689),E=n(1087),R=n(5806);const N=(0,o.ZP)(b.Z)({background:"#033003",color:"#FFFFFF",padding:10,borderRadius:16,textTransform:"none",minWidth:140}),W=(0,o.ZP)(i.Z)({padding:8,"& > ul":{padding:"10px 0 0 5px",fontSize:14,fontWeight:500,cursor:"pointer","& > a":{textDecoration:"none"}},"& > ul > a >li > svg":{marginRight:"20px"}}),Y=()=>{const[e,t]=(0,a.useState)(!1),{type:n}=(0,M.UO)();return(0,p.jsxs)(W,{children:[(0,p.jsxs)(N,{onClick:()=>{t(!0)},children:[(0,p.jsx)(v.Z,{}),"Compose"]}),(0,p.jsx)(f.Z,{children:Q.map((e=>(0,p.jsx)(E.OL,{to:"".concat(R._.emails.path,"/").concat(e.name),children:(0,p.jsxs)(C.ZP,{style:n===e.name.toLowerCase()?{borderRadius:"0 16px",backgroundColor:"#8FA69D",color:"#FFFFFF"}:{color:"#FFFFFF"},children:[(0,p.jsx)(e.icon,{style:{color:"#FFFFFF"}}),e.title]})},e.name)))}),(0,p.jsx)(U,{openDialog:e,setOpenDialog:t})]})},J=e=>{let{openDrawer:t}=e;return(0,p.jsx)(w.ZP,{anchor:"left",open:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{marginTop:"64px",width:250,background:"#303234",border:"none",height:"100vh - 64px"}},children:(0,p.jsx)(Y,{})})};var _=n(2247);const $=()=>{const[e,t]=(0,a.useState)(!0);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{toggleDrawer:()=>{t((e=>!e))}}),(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(J,{openDrawer:e}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(_.Z,{}),children:(0,p.jsx)(M.j3,{context:{openDrawer:e}})})]})]})}},5372:(e,t,n)=>{n.d(t,{Y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=561.b540e643.chunk.js.map