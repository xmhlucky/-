(function($) {
	var obj = {
		init: function() {
			this.waterfall();
			this.apply();
			this.formvalid();
			this.uploadfy();
		},
		waterfall: function() {
			var water = $('.waterfall'); //瀑布流
			var arr = [];
			var pos_left = [];			
			var sort_house = water.find('.sort_house');
			for(var i = 0; i < sort_house.length; i++) {
				if(i < 3) {			
					
					if(i == 0) {
						sort_house.eq(0).addClass('sort_left fl')
					}
					if(i==1){
						sort_house.eq(1).addClass('sort_middle fl')
					}
					if(i== 2) {
						sort_house.eq(2).addClass('sort_right fr')
					};
					var height = sort_house.eq(i).height()+10;
					arr.push(height);
					pos_left.push(sort_house.eq(i).offset().left);

				} else {
					var minheight = Math.min.apply(this, arr);
					var index = arr.indexOf(minheight);
					
					if(index % 3 == 0) {
						sort_house.eq(i).addClass('sort_left fl')
					}
					if(index % 3 == 1) {
						sort_house.eq(i).addClass('sort_middle fl')
					}
					if(index % 3 == 2) {
						sort_house.eq(i).addClass('sort_right fr')
					};
					sort_house.eq(i).css({
						position: 'absolute',
						left: pos_left[index],
						top: minheight
					});
					var height_this = sort_house.eq(i).height()+10;
					arr[index] = minheight + height_this;
				}
			}
		},
		apply: function() {
			var shenqing = $('.shenqing');
			var mask = $('.mask');
			var title = mask.find('.title').text();
			var content = mask.find('.content');
			var hide = mask.find('.sort_hide');
			var selectlist = $('.sort_slide .form_select .sort_hide p');
			content.on('click', '.tip', function(e) {
				$(this).next().toggleClass('sort_show');
				e.stopPropagation();
			});
			content.on('click', '.sort_hide p', function(e) {
				$(this).parent().prev().text($(this).text());
				var v = $(this).attr('data');
				$(this).parent().parent().attr('data',v);
				$('#catid').val(v);
				if($(this).parent().parent().attr('id')=='fenlei1'){
					catlist = catlist ? catlist : 'var catlist = {"1":{"catid":"1","catname":"\u623f\u5c4b\u79df\u8d41","children":{"122":{"catid":"122","catname":"\u79df\u623f"},"123":{"catid":"123","catname":"\u77ed\u79df\u623f\/\u65e5\u79df\u623f"},"124":{"catid":"124","catname":"\u65fa\u94fa\/\u5546\u94fa"},"125":{"catid":"125","catname":"\u5199\u5b57\u697c"},"433":{"catid":"433","catname":"\u8f66\u5e93"},"434":{"catid":"434","catname":"\u571f\u5730"},"435":{"catid":"435","catname":"\u5382\u623f\/\u4ed3\u5e93"},"2755":{"catid":"2755","catname":"\u5176\u4ed6"}}},"9":{"catid":"9","catname":"\u8f66\u8f86\u79df\u8d41","children":{"23":{"catid":"23","catname":"\u8f7f\u8f66"},"27":{"catid":"27","catname":"\u6c7d\u8f66\u7528\u54c1\/\u914d\u4ef6"},"29":{"catid":"29","catname":"\u7535\u52a8\u6469\u6258\u8f66"},"30":{"catid":"30","catname":"\u65e5\u5e38\u6469\u6258\u8f66"},"31":{"catid":"31","catname":"\u7535\u52a8\u81ea\u884c\u8f66"},"32":{"catid":"32","catname":"\u672c\u5730\u4e0b\u7ebf\u8f66"},"446":{"catid":"446","catname":"MPV"},"447":{"catid":"447","catname":"SUV"},"448":{"catid":"448","catname":"\u8dd1\u8f66"},"449":{"catid":"449","catname":"\u9762\u5305\u8f66"},"450":{"catid":"450","catname":"\u76ae\u5361"},"451":{"catid":"451","catname":"\u5ba2\u8f66"},"452":{"catid":"452","catname":"\u65e5\u5e38\u81ea\u884c\u8f66"},"35":{"catid":"35","catname":"\u5176\u4ed6"}}},"17":{"catid":"17","catname":"\u65f6\u95f4\u79df\u8d41","children":{"940":{"catid":"940","catname":"\u57f9\u8bad"},"941":{"catid":"941","catname":"\u7f51\u7edc\u5a01\u5ba2"},"942":{"catid":"942","catname":"\u4e13\u4e1a\u670d\u52a1"},"943":{"catid":"943","catname":"\u521b\u4e1a\u670d\u52a1"},"944":{"catid":"944","catname":"\u5546\u52a1\u670d\u52a1"},"2757":{"catid":"2757","catname":"\u5176\u4ed6"}}},"19":{"catid":"19","catname":"\u6570\u5b57\u8d44\u4ea7","children":{"1114":{"catid":"1114","catname":"\u5bbd\u5e26\u8f6c\u8ba9"},"1115":{"catid":"1115","catname":"\u7f51\u6e38\u8d26\u53f7"},"1116":{"catid":"1116","catname":"QQ\u53f7\u7801"},"1117":{"catid":"1117","catname":"\u7f51\u7ad9\u8d26\u53f7"},"1118":{"catid":"1118","catname":"\u6e38\u620f\u88c5\u5907\/\u91d1\u5e01"},"1119":{"catid":"1119","catname":"\u6e38\u620f\u70b9\u5361"},"1120":{"catid":"1120","catname":"\u57df\u540d\u670d\u52a1"},"2754":{"catid":"2754","catname":"\u624b\u673a\u9753\u53f7"},"1121":{"catid":"1121","catname":"\u5176\u4ed6"}}},"6":{"catid":"6","catname":"\u6570\u7801\/\u7f51\u7edc\/\u901a\u8baf","children":{"467":{"catid":"467","catname":"\u6570\u7801\u8bbe\u5907"},"2804":{"catid":"2804","catname":"AR\u8bbe\u5907"},"2805":{"catid":"2805","catname":"VR\u8bbe\u5907"},"468":{"catid":"468","catname":"\u7f51\u7edc\u8bbe\u5907"},"469":{"catid":"469","catname":"\u624b\u673a\u901a\u8baf\u8bbe\u5907"},"470":{"catid":"470","catname":"\u5176\u4ed6"}}},"7":{"catid":"7","catname":"\u529e\u516c\u7528\u54c1","children":{"132":{"catid":"132","catname":"\u529e\u516c\u8bbe\u5907"},"133":{"catid":"133","catname":"\u529e\u516c\u5bb6\u5177"},"134":{"catid":"134","catname":"\u5176\u4ed6"}}},"5":{"catid":"5","catname":"\u5962\u4f88\u54c1","children":{"454":{"catid":"454","catname":"\u5305\u888b"},"455":{"catid":"455","catname":"\u8155\u8868"},"456":{"catid":"456","catname":"\u73e0\u5b9d\u9996\u9970"},"457":{"catid":"457","catname":"\u914d\u9970"},"458":{"catid":"458","catname":"\u670d\u9970"},"459":{"catid":"459","catname":"\u978b\u9774"},"460":{"catid":"460","catname":"\u793c\u54c1"},"461":{"catid":"461","catname":"\u79c1\u4eba\u98de\u673a"},"2765":{"catid":"2765","catname":"\u5176\u4ed6"}}},"18":{"catid":"18","catname":"\u751f\u6d3b\u670d\u52a1","children":{"1023":{"catid":"1023","catname":"\u5bb6\u653f\u670d\u52a1"},"1024":{"catid":"1024","catname":"\u642c\u5bb6\u670d\u52a1"},"1025":{"catid":"1025","catname":"\u7ef4\u4fee\u670d\u52a1"},"1026":{"catid":"1026","catname":"\u56de\u6536\u670d\u52a1"},"1027":{"catid":"1027","catname":"\u6c7d\u8f66\u670d\u52a1"},"1028":{"catid":"1028","catname":"\u5ba0\u7269\u670d\u52a1"},"2766":{"catid":"2766","catname":"\u5176\u4ed6"}}},"4":{"catid":"4","catname":"\u5de5\u7a0b\/\u519c\u7528\u673a\u68b0","children":{"479":{"catid":"479","catname":"\u5de5\u7a0b\u673a\u68b0"},"480":{"catid":"480","catname":"\u673a\u68b0\u8bbe\u5907"},"481":{"catid":"481","catname":"\u519c\u7528\u673a\u68b0"},"2777":{"catid":"2777","catname":"\u5176\u4ed6"}}},"12":{"catid":"12","catname":"\u8fd0\u52a8\/\u4f11\u95f2\/\u6237\u5916\/\u5a31\u4e50","children":{"656":{"catid":"656","catname":"\u8fd0\u52a8"},"657":{"catid":"657","catname":"\u4f11\u95f2"},"658":{"catid":"658","catname":"\u6237\u5916\u88c5\u5907"},"659":{"catid":"659","catname":"\u5a31\u4e50"},"2779":{"catid":"2779","catname":"\u5176\u4ed6"}}},"10":{"catid":"10","catname":"\u6e38\u4e50\/\u821e\u53f0\u8bbe\u5907\/\u4f1a\u8bae\u4f1a\u5c55\u7528\u54c1","children":{"542":{"catid":"542","catname":"\u6e38\u4e50\u8bbe\u5907"},"543":{"catid":"543","catname":"\u821e\u53f0\u8bbe\u5907"},"544":{"catid":"544","catname":"\u4f1a\u8bae\u4f1a\u5c55\u7528\u54c1"},"2785":{"catid":"2785","catname":"\u5176\u4ed6"}}},"3":{"catid":"3","catname":"\u533b\u7597\/\u5065\u8eab\/\u8bbe\u5907\/\u4eea\u5668","children":{"483":{"catid":"483","catname":"\u533b\u7597\u5668\u68b0"},"484":{"catid":"484","catname":"\u5065\u8eab\u5668\u6750"},"485":{"catid":"485","catname":"\u745c\u4f3d\u7528\u54c1"},"2787":{"catid":"2787","catname":"\u5176\u4ed6"}}},"11":{"catid":"11","catname":"\u5c45\u5bb6\/\u5efa\u6750\/\u65e5\u7528\/\u5bb6\u7535","children":{"575":{"catid":"575","catname":"\u4e94\u91d1\u5668\u6750"},"576":{"catid":"576","catname":"\u5bb6\u7535"}}},"2":{"catid":"2","catname":"\u5a5a\u5e86\/\u5e86\u5178\/\u8282\u65e5\u7528\u54c1","children":{"487":{"catid":"487","catname":"\u5a5a\u7eb1\u793c\u670d"},"488":{"catid":"488","catname":"\u5a5a\u793c\u573a\u5730"},"489":{"catid":"489","catname":"\u5a5a\u8f66"},"490":{"catid":"490","catname":"\u821e\u53f0\u706f\u5149"},"491":{"catid":"491","catname":"\u793c\u70ae"},"492":{"catid":"492","catname":"\u9999\u69df\u5854"},"493":{"catid":"493","catname":"\u6492\u82b1\u673a"},"494":{"catid":"494","catname":"\u8def\u5f15"},"495":{"catid":"495","catname":"\u62f1\u95e8"},"496":{"catid":"496","catname":"\u5e10\u7bf7\/\u906e\u9633\u4f1e"},"497":{"catid":"497","catname":"\u5f69\u65d7\u9053\u65d7"},"498":{"catid":"498","catname":"\u5730\u6bef"},"499":{"catid":"499","catname":"\u684c\u6905"},"500":{"catid":"500","catname":"\u6307\u793a\u724c"},"2790":{"catid":"2790","catname":"\u5176\u4ed6"}}},"13":{"catid":"13","catname":"\u5a74\u7ae5\u7528\u54c1","children":{"784":{"catid":"784","catname":"\u5a74\u513f\u5e8a"},"785":{"catid":"785","catname":"\u7ae5\u8f66"},"786":{"catid":"786","catname":"\u513f\u7ae5\u5ea7\u6905"},"787":{"catid":"787","catname":"\u513f\u7ae5\u73a9\u5177"},"788":{"catid":"788","catname":"\u4eb2\u5b50\u73a9\u5177"},"2791":{"catid":"2791","catname":"\u5176\u4ed6"}}},"15":{"catid":"15","catname":"\u56fe\u4e66\/\u97f3\u50cf","children":{"837":{"catid":"837","catname":"\u97f3\u50cf"},"838":{"catid":"838","catname":"\u5c11\u513f"},"839":{"catid":"839","catname":"\u6559\u80b2"},"840":{"catid":"840","catname":"\u6587\u827a"},"841":{"catid":"841","catname":"\u7ecf\u7ba1\u52b1\u5fd7"},"842":{"catid":"842","catname":"\u4eba\u6587\u793e\u79d1"},"843":{"catid":"843","catname":"\u751f\u6d3b"},"844":{"catid":"844","catname":"\u79d1\u6280"},"845":{"catid":"845","catname":"\u671f\u520a\/\u539f\u7248"},"846":{"catid":"846","catname":"\u7535\u5b50\u4e66"},"847":{"catid":"847","catname":"\u6570\u5b57\u97f3\u4e50"},"2793":{"catid":"2793","catname":"\u5176\u4ed6"}}},"14":{"catid":"14","catname":"\u670d\u88c5","children":{"790":{"catid":"790","catname":"\u6f14\u51fa\u670d"},"791":{"catid":"791","catname":"COSPLAY"},"792":{"catid":"792","catname":"\u7537\u88c5"},"793":{"catid":"793","catname":"\u821e\u8e48\u670d\u88c5"},"794":{"catid":"794","catname":"\u5973\u88c5"},"795":{"catid":"795","catname":"\u665a\u793c\u670d"},"796":{"catid":"796","catname":"\u5b66\u4f4d\u670d"},"797":{"catid":"797","catname":"\u4f1a\u5c55\u670d\u88c5"},"798":{"catid":"798","catname":"\u8282\u65e5\u670d\u88c5"},"799":{"catid":"799","catname":"\u670d\u88c5\u914d\u9970"},"800":{"catid":"800","catname":"\u6c42\u804c\u88c5"},"801":{"catid":"801","catname":"\u6c11\u65cf\u670d\u88c5"},"802":{"catid":"802","catname":"\u513f\u7ae5\u670d\u88c5"},"803":{"catid":"803","catname":"\u5361\u901a\u670d\u9970"},"804":{"catid":"804","catname":"\u5176\u4ed6"}}},"16":{"catid":"16","catname":"\u5176\u4ed6","children":{"2807":{"catid":"2807","catname":"\u573a\u5730\u79df\u8d41"},"827":{"catid":"827","catname":"\u7ecf\u8425\u573a\u6240"},"828":{"catid":"828","catname":"\u6210\u5957\u8bbe\u5907"},"829":{"catid":"829","catname":"\u5e7f\u544a\u4f4d"},"830":{"catid":"830","catname":"\u4eba\u624d\/\u56e2\u961f"},"831":{"catid":"831","catname":"\u6863\u53e3\/\u683c\u5b50\u94fa"},"832":{"catid":"832","catname":"\u8239\u8236"},"833":{"catid":"833","catname":"\u98de\u673a"},"834":{"catid":"834","catname":"\u6a21\u7279"},"835":{"catid":"835","catname":"\u5176\u4ed6"}}}}';
					if(v>0) {
						data = catlist[v]['children'];
						var str = '';
						
						for(s in data){
							str +='<p type="catid" data="'+s+'">'+data[s]['catname']+'</p>';
						}
						$('#fenlei2').find('.sort_hide').html(str);
					}else{
						$('#fenlei2').find('.sort_hide').html('<p type="catid" data="0">请选择分类</p>');
					}
				}
				$(this).parent().removeClass('sort_show');

			});
			$(document.body).click(function() {
				var hide = $('.sort_hide');
				hide.removeClass('sort_show');
			});
			shenqing.click(function() {
				layer.open({
					type: 2,
					title: '添加网站申请',
					area: ['760px', '600px'], //宽高
					shadeClose: true,
					zIndex: layer.zIndex,
					content: ['/about.php?part=friendsite', 'no'],
					scrollbar: false,
					success: function(layero, index) {

					}

				});
			});
		},
		formvalid:function(){
			if($('#myFrom').length<1) return false;
			var showmsg = function(msg,style) { //假定你的信息提示方法为showmsg， 在方法里可以接收参数msg，当然也可以接收到o及cssctl;
				if(style) msg = '<p style="line-height:180px;text-align:center;">'+msg+'</p>';
				layer.open({
					type: 1,
					title: ['温馨提示', "background:#fff"],
					area: ['460px', '230px'], //宽高
					content: msg
				});
			}
			$.Tipmsg.r = null;
			$("#myFrom").Validform({
				datatype:{
					'tel': /\d{3}-\d{8}|\d{4}-\d{7}/
				},
				tiptype: function(msg,o,cssctl) {
					showmsg(msg,1);
				},
				tipSweep:true,
				btnSubmit: '#btnsubmit',
				ajaxPost: true,
				beforeCheck:function(curform){
					if($('#fenlei2').attr('data')<1){
						showmsg('请选择分类 ',1);
						return false;
					}
				},
				callback: function(data) {
					if(data.status == 'y') {
						showmsg('<p style="font-weight:bold;margin:40px 0 20px 20px;"><i class="iconfont" style="color:#2e9c3b;padding-right:5px;">&#xe616;</i>添加网站申请已提交！</p><p style="color:#999999;margin-left:35px;width:350px;">我们会尽快为您审核。一般审核周期为工作日8小时，非工作日顺延。</p>',0);
					}else{
						showmsg('<p style="font-weight:bold;margin:40px 0 20px 20px;">留言提交失败！</p>',0);
					}
				}
			})
		},
		uploadfy:function(){	
			picdel();
			function picdel() { //单图删除
				$('.picdel').click(function() {
					var picname = $(this).prev().val();
					var tag = $(this).parent().parent();
					$.post("/uploadify.php", { picname: picname },function(data) {
						tag.remove();
						if(uploadtype == 'flash'){
							var statsvalue = __this_flash.Filedata.getStats();//获取现在图片个数
							statsvalue.successful_uploads = statsvalue.successful_uploads-1;
							__this_flash.Filedata.setStats({'successful_uploads':statsvalue.successful_uploads});//改变图片个数
						}else if(uploadtype == 'js'){
							__this_js.Filedata -= 1;
						}
					});
				});
			}
			var file_upload = $('#file_upload');
			function flashupdload(){
				if(file_upload.length<1) return false;
				loadStyles("/template/default/css/uploadify.css");
				file_upload.uploadify({
					'formData': {
						'timestamp': timestamp,
						'token': md5timestamp
					},
					'auto': true,
					'width': 108,
					'height': 83,
					'uploadLimit' : 1, 
					'buttonClass': 'some-class',
					'fileSizeLimit' : 1024*2,
					'queueSizeLimit' : 1, 
					'removeTimeout'   : 1, 		
					'fileObjName'  : 'Filedata',					
					'fileTypeExts'  : '*.png;*.jpg;*.gif;*.jpeg;',
					'buttonImage': '/template/zulindao/images/04.png',
					'swf': '/template/default/js/uploadify.swf?ver=' + Math.random(),
					'uploader': "/uploadify.php?ver=" + Math.random(),
					'onUploadStart': function(file) {
						$("#file_upload").uploadify("settings", "formData", { 'ifthumb': 1, 'ttype': 1, width: 120, height: 120 });
					},
					'onUploadSuccess': function(file, data, response) {
						// alert('The file ' + file.name + ' was successfully uploaded with a response of ' + response + ':' + data);
						if(data) {
							var pstr = $("#imginfo").html();
							var itml = pstr + '<div class="photolist"><div class="pcon"><img width="100" height="85" class="photo" id="' + data + '" src="' + data + '"></div><div class="pinfo"><input type="hidden" name="photolist[]" value="' + data + '"><a href="javascript:void(0);" class="picdel"></a></div></div>';
							$("#imginfo").html(itml);
							picdel();
						}
					}
				});
			}
			
			function h5upload(){
				loadStyles("/template/default/css/Huploadify.css");
				$('#upload').Huploadify({
					auto:true,
					'fileTypeExts'  : '*.png;*.jpg;*.gif;*.jpeg;',
					accepttext:'image/png,image/jpeg,image/gif',
					multi:true,
					formData:{
						'timestamp': timestamp,
						'token': md5timestamp
					},
					fileSizeLimit:1024*2,
					showUploadedPercent:true,//是否实时显示上传的百分比，如20%
					showUploadedSize:true,
					removeTimeout:1000,
					uploadLimit:1,
					fileObjName:'Filedata',//在后端接受文件的参数名称，如PHP中的$_FILES['file']
					uploader:"/uploadify.php?ver=" + Math.random(),
					onUploadStart:function(){
					//alert('开始上传');
					},
					onInit:function(){
					//alert('初始化');
					},
					onUploadComplete:function(data,responsetext){
						//console.log(responsetext);
						if(responsetext) {
							var pstr = $("#imginfo").html();
							var itml = pstr + '<div class="photolist"><div class="pcon"><img width="100" height="85" class="photo" id="' + responsetext + '" src="' + responsetext + '"></div><div class="pinfo"><input type="hidden" name="photolist[]" value="' + responsetext + '"><a href="javascript:void(0);" class="picdel"></a></div></div>';
							$("#imginfo").html(itml);
							picdel();
						}
					},
					onDelete:function(file){
						console.log('删除的文件：'+file);
						console.log(file);
					}
				});
			}
			function loadStyles(url){
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = url;
				document.getElementsByTagName('head')[0].appendChild(link);
			}
			function flashChecker() {
				var hasFlash = 0; //是否安装了flash
				var flashVersion = 0; //flash版本
				if (document.all) {
				  var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
				  if (swf) {
					hasFlash = 1;
					VSwf = swf.GetVariable("$version");
					flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
				  }
				} else {
				  if (navigator.plugins && navigator.plugins.length > 0) {
					var swf = navigator.plugins["Shockwave Flash"];
					if (swf) {
					  hasFlash = 1;
					  var words = swf.description.split(" ");
					  for (var i = 0; i < words.length; ++i) {
						if (isNaN(parseInt(words[i]))) continue;
						flashVersion = parseInt(words[i]);
					  }
					}
				  }
				}
				return { f: hasFlash, v: flashVersion };
			}
			if (document.all) {
				var swf = flashChecker();
				if (swf.f ==1) {
					flashupdload()
					var uploadtype = 'flash';
				}else{
					//alert('您没有安装flash');
					h5upload();
					var uploadtype = 'js';
				}
			}else {
				var swf = flashChecker();
				if (swf.f ==1) {
					flashupdload();
					var uploadtype = 'flash';
					//h5upload();
				}else{
					//alert('您没有安装flash');
					h5upload();
					var uploadtype = 'js';
				}
			}
		}
	}
	obj.init();

})(jQuery)