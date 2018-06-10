webpackJsonp([10],{"+Lg7":function(n,s,l){"use strict";var e=function(){var n=this,s=n.$createElement,l=n._self._c||s;return l("div",[l("div",{staticClass:"sidenav"},[l("left-bar")],1),l("div",{staticClass:"main"},[l("div",{staticClass:"container"},[l("Title"),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-10 offset-sm-1",staticStyle:{color:"#444",padding:"20px 20px 20px 20px"}},[l("h2",[n._v("Arquivos protos")]),l("p",[n._v("\n              Os arquivos protos carregam as definições de contrato entre os projetos. Caso exista necessidade de implementar a integração com o VSS-SDK\n              em uma linguagem que não estenda C, é possível recriar as interfaces utilizando esses protocolos.\n          ")]),l("h5",{staticStyle:{"margin-top":"40px"}},[n._v("State")]),l("div",{domProps:{innerHTML:n._s(n.state)}}),l("h5",{staticStyle:{"margin-top":"40px"}},[n._v("Command")]),l("div",{domProps:{innerHTML:n._s(n.command)}}),l("h5",{staticStyle:{"margin-top":"40px"}},[n._v("Debug")]),l("div",{domProps:{innerHTML:n._s(n.debug)}}),l("h5",{staticStyle:{"margin-top":"40px"}},[n._v("Control")]),l("div",{domProps:{innerHTML:n._s(n.control)}})])])],1)])])};e._withStripped=!0;var t={render:e,staticRenderFns:[]};s.a=t},"2O/o":function(n,s,l){var e=l("qj9+");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);l("rjj0")("531ba906",e,!1,{sourceMap:!1})},Beoq:function(n,s,l){"use strict";s.a={data:function(){return{menu:[{id:"",label:"Visão geral",link:"/",menu:[{id:"A.",label:"Instalação",link:"/doc-overview-install"},{id:"B.",label:"Utilização",link:"/doc-overview-use"},{id:"C.",label:"Desenvolvimento",link:"/doc-overview-dev"}]},{id:"1.",label:"VSS-Core",link:"/doc-core",menu:[{id:"1.1.",label:"Domínio",link:"/doc-core-domain",menu:[{id:"1.1.1.",label:"Constantes",link:"/doc-core-domain-constants"},{id:"1.1.2.",label:"Enums",link:"/doc-core-domain-enums"},{id:"1.1.3.",label:"Modelos básicos",link:"/doc-core-domain-simple-models"},{id:"1.1.4.",label:"Modelos de comunicação",link:"doc-core-domain-communication-models"}]},{id:"1.2.",label:"Interfaces de comunicação",link:"/doc-core-coomunication-interfaces"},{id:"1.3.",label:"Arquivos protos",link:"/doc-core-protos"}]},{id:"2.",label:"VSS-Samples",link:"/doc-samples",menu:[{id:"2.1.",label:"C++",link:"/doc-samples-cpp"}]},{id:"3.",label:"VSS-Simulator",link:"/doc-simulator",menu:[{id:"3.1.",label:"Enviando comandos",link:"/doc-simulator-send-commands"},{id:"3.2.",label:"Obtendo estados",link:"/doc-simulator-get-states"}]},{id:"4.",label:"VSS-Viewer",link:"",menu:[{id:"4.1.",label:"Enviando Debug",link:""},{id:"4.2.",label:"Pausando partidas",link:""},{id:"4.3.",label:"Manipulando objetos em campo",link:""},{id:"4.4.",label:"Alterando câmeras",link:""}]},{id:"5.",label:"VSS-Joystick",link:"",menu:[{id:"5.1.",label:"Controlando robôs no VSS-Simulator",link:""}]},{id:"6.",label:"VSS-Vision",link:"",menu:[{id:"6.1.",label:"Rotina de calibragem",link:"",menu:[{id:"6.1.1.",label:"Calibrando cores",link:""},{id:"6.1.2.",label:"Calibração rotação",link:""},{id:"6.1.3.",label:"Calibrando corte",link:""},{id:"6.1.4.",label:"Salvando calibragem",link:""},{id:"6.1.5.",label:"Carregando calibragem",link:""}]},{id:"6.2.",label:"Rotina de jogo",link:"",menu:[{id:"6.2.1.",label:"Carregando calibragem",link:""},{id:"6.2.2.",label:"Iniciando processamento",link:""}]}]}]}}}},VzKB:function(n,s,l){"use strict";var e=l("p0RR"),t=l("XN39");s.a={data:function(){return{state:"",command:"",debug:"",control:""}},components:{LeftBar:e.a,Title:t.a},created:function(){this.loadState(),this.loadCommand(),this.loadDebug(),this.loadControl()},methods:{loadControl:function(){this.control+='<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-87673c31a5b37b5e6556b63e1081ebbc.css">',this.control+='<div id="gist90039850" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-control-proto" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-protocol-buffer">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-control-proto-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-control-proto-LC1" class="blob-code blob-code-inner js-file-line">package vss_control;</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-control-proto-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-control-proto-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Pose</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-control-proto-LC4" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">x</span> = <span class="pl-c1">3</span></td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-control-proto-LC5" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">y</span> = <span class="pl-c1">4</span>;    </td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-control-proto-LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">float</span> <span class="pl-smi">yaw</span> = <span class="pl-c1">5</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-control-proto-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-control-proto-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-control-proto-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">User_Control</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-control-proto-LC10" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-k">bool</span> <span class="pl-smi">paused</span> = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-control-proto-LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">new_ball_pose</span> = <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-control-proto-LC12" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">repeated</span> <span class="pl-c1">Pose</span> <span class="pl-smi">new_robots_blue_pose</span> = <span class="pl-c1">3</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-control-proto-LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">repeated</span> <span class="pl-c1">Pose</span> <span class="pl-smi">new_robots_yellow_pose</span> = <span class="pl-c1">4</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-control-proto-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-control-proto-LC14" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n         </div>\n    </div>\n</div>\n'},loadDebug:function(){this.debug+='<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-87673c31a5b37b5e6556b63e1081ebbc.css">',this.debug+='<div id="gist90039810" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-debug-proto" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-protocol-buffer">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-debug-proto-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-debug-proto-LC1" class="blob-code blob-code-inner js-file-line">package vss_debug;</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-debug-proto-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-debug-proto-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Pose</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-debug-proto-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">required</span> <span class="pl-k">uint32</span> <span class="pl-smi">id</span> = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-debug-proto-LC5" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">x</span> = <span class="pl-c1">2</span>;   </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-debug-proto-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">y</span> = <span class="pl-c1">3</span>;    </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-debug-proto-LC7" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">optional</span> <span class="pl-c1">float</span> <span class="pl-smi">yaw</span> = <span class="pl-c1">4</span>;   </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-debug-proto-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-debug-proto-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Path</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-debug-proto-LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">required</span> <span class="pl-k">uint32</span> <span class="pl-smi">id</span> = <span class="pl-c1">1</span>;    </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-debug-proto-LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">repeated</span> <span class="pl-c1">Pose</span> <span class="pl-smi">poses</span> = <span class="pl-c1">2</span>;  </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-debug-proto-LC12" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-debug-proto-LC13" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-debug-proto-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Global_Debug</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-debug-proto-LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">repeated</span> <span class="pl-c1">Pose</span> <span class="pl-smi">step_poses</span> = <span class="pl-c1">1</span>;    </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-debug-proto-LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">repeated</span> <span class="pl-c1">Pose</span> <span class="pl-smi">final_poses</span> = <span class="pl-c1">2</span>;    </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-debug-proto-LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">repeated</span> <span class="pl-c1">Path</span> <span class="pl-smi">paths</span> = <span class="pl-c1">3</span>;    </td>\n      </tr>\n      <tr>\n        <td id="file-debug-proto-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-debug-proto-LC18" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n         </div>\n</div>\n'},loadCommand:function(){this.command+='<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-87673c31a5b37b5e6556b63e1081ebbc.css">',this.command+='<div id="gist90039775" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-command-proto" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-protocol-buffer">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-command-proto-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-command-proto-LC1" class="blob-code blob-code-inner js-file-line">package vss_command;</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-command-proto-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-command-proto-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Robot_Command</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-command-proto-LC4" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">required</span> <span class="pl-k">uint32</span>\t<span class="pl-smi">id</span> = <span class="pl-c1">1</span>;\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-command-proto-LC5" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">left_vel</span> = <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-command-proto-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">right_vel</span> = <span class="pl-c1">3</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-command-proto-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-command-proto-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-command-proto-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Global_Commands</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-command-proto-LC10" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">optional</span> <span class="pl-k">uint32</span> <span class="pl-smi">id</span> = <span class="pl-c1">1</span>;\t\t\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-command-proto-LC11" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">optional</span> <span class="pl-k">bool</span> <span class="pl-smi">is_team_yellow</span> = <span class="pl-c1">2</span>;\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-command-proto-LC12" class="blob-code blob-code-inner js-file-line">\trepeated Robot_Command robot_commands = 3;\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-command-proto-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-command-proto-LC13" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n          </div>\n</div>\n'},loadState:function(){this.state+='<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-87673c31a5b37b5e6556b63e1081ebbc.css">',this.state+='<div id="gist90038887" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-state-proto" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-protocol-buffer">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-state-proto-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-state-proto-LC1" class="blob-code blob-code-inner js-file-line">package vss_state;</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-state-proto-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-state-proto-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">RGB</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-state-proto-LC4" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-k">uint32</span> <span class="pl-smi">r</span> = <span class="pl-c1">1</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-state-proto-LC5" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-k">uint32</span> <span class="pl-smi">g</span> = <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-state-proto-LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-k">uint32</span> <span class="pl-smi">b</span> = <span class="pl-c1">3</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-state-proto-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-state-proto-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-state-proto-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Pose</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-state-proto-LC10" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">x</span> = <span class="pl-c1">1</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-state-proto-LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-c1">float</span> <span class="pl-smi">y</span> = <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-state-proto-LC12" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">float</span> <span class="pl-smi">yaw</span> = <span class="pl-c1">3</span>;   </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-state-proto-LC13" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-state-proto-LC14" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-state-proto-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Ball_State</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-state-proto-LC16" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-c1">Pose</span> <span class="pl-smi">pose</span> = <span class="pl-c1">1</span>;       </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-state-proto-LC17" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">v_pose</span> = <span class="pl-c1">2</span>;     </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-state-proto-LC18" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">k_pose</span> = <span class="pl-c1">3</span>;       </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-state-proto-LC19" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">k_v_pose</span> = <span class="pl-c1">4</span>;     </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-state-proto-LC20" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-state-proto-LC21" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-state-proto-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Robot_State</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-state-proto-LC23" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">required</span> <span class="pl-c1">Pose</span> <span class="pl-smi">pose</span> = <span class="pl-c1">1</span>;     </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-state-proto-LC24" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">v_pose</span> = <span class="pl-c1">2</span>;   </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-state-proto-LC25" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">k_pose</span> = <span class="pl-c1">3</span>;   </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-state-proto-LC26" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">Pose</span> <span class="pl-smi">k_v_pose</span> = <span class="pl-c1">4</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-state-proto-LC27" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-c1">RGB</span> <span class="pl-smi">color</span> = <span class="pl-c1">5</span>;\t  </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-state-proto-LC28" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-state-proto-LC29" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-state-proto-LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-k">message</span> <span class="pl-en">Global_State</span>{</td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-state-proto-LC31" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-k">uint32</span> <span class="pl-smi">id</span> = <span class="pl-c1">1</span>;               </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-state-proto-LC32" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-k">bool</span> <span class="pl-smi">origin</span> = <span class="pl-c1">2</span>;\t\t       </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-state-proto-LC33" class="blob-code blob-code-inner js-file-line">  repeated Ball_State balls = 3;            </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-state-proto-LC34" class="blob-code blob-code-inner js-file-line">  repeated Robot_State robots_yellow = 4;    </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-state-proto-LC35" class="blob-code blob-code-inner js-file-line">  repeated Robot_State robots_blue = 5;      </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-state-proto-LC36" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-k">uint32</span> <span class="pl-smi">paused</span> = <span class="pl-c1">6</span>;           </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-state-proto-LC37" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">optional</span> <span class="pl-k">uint32</span> <span class="pl-smi">time</span> = <span class="pl-c1">7</span>;             </td>\n      </tr>\n      <tr>\n        <td id="file-state-proto-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-state-proto-LC38" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n        </div>\n</div>\n'}}}},XN39:function(n,s,l){"use strict";var e=l("cg/V"),t=l("duXM"),a=!1;var i=function(n){a||l("jWMY")},o=l("VU/8")(e.a,t.a,!1,i,null,null);o.options.__file="components/Title.vue",s.a=o.exports},"cg/V":function(n,s,l){"use strict";s.a={}},dhgJ:function(n,s,l){(n.exports=l("FZ+f")(!1)).push([n.i,"",""])},duXM:function(n,s,l){"use strict";var e=function(){var n=this.$createElement,s=this._self._c||n;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4 offset-sm-4"},[s("center",{staticStyle:{"font-size":"22px",padding:"10px 10px 10px 10px",color:"#ccc"}},[this._v("VSS-SDK")])],1)])};e._withStripped=!0;var t={render:e,staticRenderFns:[]};s.a=t},"fYN/":function(n,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=l("VzKB"),t=l("+Lg7"),a=!1;var i=function(n){a||l("2O/o")},o=l("VU/8")(e.a,t.a,!1,i,null,null);o.options.__file="pages/doc-core-protos.vue",s.default=o.exports},gfdU:function(n,s,l){var e=l("mROm");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);l("rjj0")("d2149b62",e,!1,{sourceMap:!1})},jWMY:function(n,s,l){var e=l("dhgJ");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);l("rjj0")("2c9d3aac",e,!1,{sourceMap:!1})},mROm:function(n,s,l){(n.exports=l("FZ+f")(!1)).push([n.i,"b>a,ul>a{color:#444}.li-without-dot{list-style-type:none;padding-bottom:2px;padding-left:8px}ul{padding:0;margin:0}.sidenav{height:100%;width:280px;position:fixed;z-index:1;top:0;left:0;background-color:#f8f8f8;overflow-x:hidden;overflow-y:scroll;padding-top:10px}.sidenav ul{padding:3px 0 3px 8px;text-decoration:none;display:block;font-size:14px;color:#333}.sidenav ul:hover{color:#428bca;cursor:pointer}.main{margin-left:280px;padding:0 10px}@media screen and (max-height:450px){.sidenav{padding-top:15px}.sidenav a{font-size:18px}}",""])},p0RR:function(n,s,l){"use strict";var e=l("Beoq"),t=l("vyvD"),a=!1;var i=function(n){a||l("gfdU")},o=l("VU/8")(e.a,t.a,!1,i,null,null);o.options.__file="components/LeftBar.vue",s.a=o.exports},"qj9+":function(n,s,l){(n.exports=l("FZ+f")(!1)).push([n.i,"p{margin-top:20px}.li-default{padding-bottom:10px}",""])},vyvD:function(n,s,l){"use strict";var e=function(){var n=this,s=n.$createElement,l=n._self._c||s;return l("div",[l("li",{staticClass:"li-without-dot"},n._l(n.menu,function(s){return l("ul",{key:s.id},[l("b",[l("nuxt-link",{attrs:{to:s.link}},[n._v(" "+n._s(s.id)+" "+n._s(s.label)+" ")])],1),void 0!==s.menu?l("li",{staticClass:"li-without-dot"},n._l(s.menu,function(s){return l("ul",{key:s.id},[l("nuxt-link",{attrs:{to:s.link}},[n._v(" "+n._s(s.id)+" "+n._s(s.label)+" ")]),void 0!==s.menu?l("li",{staticClass:"li-without-dot"},n._l(s.menu,function(s){return l("ul",{key:s.id},[l("nuxt-link",{attrs:{to:s.link}},[n._v(" "+n._s(s.id)+" "+n._s(s.label)+" ")])],1)})):n._e()],1)})):n._e()])}))])};e._withStripped=!0;var t={render:e,staticRenderFns:[]};s.a=t}});