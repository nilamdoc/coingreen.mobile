/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});

var domain = "http://coingreen.com";
var footer = '<div class="container"><h4><a href="#" onclick="app.index();">Home</a> <a href="#" onclick="app.about();">About</a> <a href="#" onclick="app.contact();">Contact</a></h4></div>';
var footerSignin = '<div class="container" style="border-bottom: double black;border-top:1px solid gray;margin-top:20px ">';
		footerSignin = footerSignin +'	<ul class="nav  navbar-nav">';
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.logout();">Logout</a></li>';
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.balance();">Balance</a></li>';
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.send();">Send</a></li>	';
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.deposit();">Deposit</a></li>';		
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.withdraw();">Withdraw</a></li>';
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.download();">Download</a></li>';		
		footerSignin = footerSignin +'		<li><a href="#" onclick="app.open();">Open Source</a></li>';		
		footerSignin = footerSignin +'	</ul>';
		footerSignin = footerSignin +'</div>';
var footerLogout = '<div class="container" style="border-bottom: double black;border-top:1px solid gray;margin-top:20px ">';
		footerLogout = footerLogout +'	<ul class="nav  navbar-nav">';
		footerLogout = footerLogout +'		<li><a href="#" onclick="app.balance();">Balance</a></li>';
		footerLogout = footerLogout +'		<li><a href="#" onclick="app.send();">Send</a></li>	';
		footerLogout = footerLogout +'		<li><a href="#" onclick="app.deposit();">Deposit</a></li>';		
		footerLogout = footerLogout +'		<li><a href="#" onclick="app.withdraw();">Withdraw</a></li>';
		footerLogout = footerLogout +'		<li><a href="#" onclick="app.download();">Download</a></li>';		
		footerLogout = footerLogout +'		<li><a href="#" onclick="app.open();">Open Source</a></li>';		
		footerLogout = footerLogout +'	</ul>';
		footerLogout = footerLogout +'</div>';
var aboutus = '<div class="container"><h2>About us</h2><p>A group of developers who feel identification of virtual currency would make it easier for government to legalize it.</p><p>Please send your views to greencoin [AT] coingreen.org</p></div>';
var contactus = '<div class="container"><h2>Contact us</h2><p>greencoin [AT] coingreen.org</p></div>';
var html = '<div class="jumbotron container" style="text-align:center ">';
html = html +'	<h1>Payments with CoinGreen</h1>';
html = html +'	<p class="lead">Now you can pay with virtual currency (CoinGreen) to any email with ease!!!</p>';
html = html +'	<p><a class="btn btn-lg btn-success" href="#" role="button" onclick="app.balance();" style="color:#000000">Get Free CoinGreens!</a></p>';
html = html +'</div>';
html = html +'<div class="row marketing">';
html = html +'	<div class="col-lg-6">';
html = html +'		<div style="min-height:100px " class="col-lg-12">';
html = html +'			<a href="#"  onclick="app.balance();" class="btn btn-primary btn-lg btn-block" role="button" style="color:#000000">Check Balance / Login</a>';
html = html +'			<p>Check balance of CoinGreens in your email account, if your email is not registered, we will just register it and give you 100 free coins.</p>';
html = html +'		</div>';
html = html +'		<div style="min-height:100px " class="col-lg-12">		';
html = html +'			<a href="#" onclick="app.send();" class="btn btn-warning btn-lg btn-block" role="button" style="color:#000000">Send</a>';
html = html +'			<p>Send CoinGreens to any email address, with just a click!</p>';
html = html +'		</div>';
html = html +'		<div style="min-height:100px " class="col-lg-12">						';
html = html +'			<a href="#"  onclick="app.download();" class="btn btn-primary btn-lg btn-block" role="button" style="color:#000000">Download</a>';
html = html +'			<p>Download CoinGreen client for Windows, Linux. We are developing for iOS too.</p>';
html = html +'		</div>';
html = html +'	</div>';
html = html +'	<div class="col-lg-6">';
html = html +'		<div style="min-height:100px " class="col-lg-12">					';
html = html +'			<a href="#"  onclick="app.deposit();" class="btn btn-success btn-lg btn-block" role="button" style="color:#000000">Deposit</a>';
html = html +'			<p>Deposit CoinGreens to your online wallet on CoinGreen.com for sending to a friend.</p>';
html = html +'		</div>';
html = html +'		<div style="min-height:100px " class="col-lg-12">				';
html = html +'			<a href="#"  onclick="app.withdraw();" class="btn btn-danger btn-lg btn-block" role="button" style="color:#000000">Withdraw</a>';
html = html +'			<p>Withdraw CoinGreens to your personal wallet!</p>';
html = html +'		</div>';
html = html +'		<div style="min-height:100px " class="col-lg-12">						';
html = html +'			<a href="#"  onclick="app.open();" class="btn btn-primary btn-lg btn-block" role="button" style="color:#000000">Open Source</a>';
html = html +'			<p>CoinGreen is an opensource project cloned from bitcoin. We would like you to take a look and collabarate to this revolution of payments made easy through emails. </p>';
html = html +'		</div>';
html = html +'	</div>';
html = html +'</div>';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
			
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },

		user: function(){
			
			var  myURL = "http://coingreencom/balance/index/json";
		  $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){

// User Specific functions
						},
            error: function(data){
                console.log(data);
            }
        });
						
			},
		index: function(){
				var  myURL = domain + "/pages/home/json";
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
							$("#home-content").html(html);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
						},
            error: function(data){
                console.log(data);
            }
        });

		},

			login: function(){
				var  myURL = domain + "/balance/index/json";
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
			//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
							htmlnew = '<h2>Deposit</h2>';
							$("#home-content").html(htmlnew);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
							return false;
							},
            error: function(data){
                console.log(data);
            }
        });
		},		
		balance: function(){
				var  myURL = domain + "/balance/index/json";
				if($("#email").html()==""){
					htmlnew =           '<div class="alert alert-danger">';
					htmlnew = htmlnew + '	First time users, if your email is not present on the system, we will create a new email and send the "Login Email Password". We will also credit 100 XGC to your account, once you confirm your email address.';
					htmlnew = htmlnew + '<div><input type="text" name="Email" class="form-control" onBlur="SendPassword();" placeholder="name@email.com" value="" id="Email" /></div>';
					htmlnew = htmlnew + '</div>';
					htmlnew = htmlnew + '<div class="alert alert-danger">';
					htmlnew = htmlnew + 'Please check your email in 5 seconds. You will receive "<strong>Login Email Password</strong>" use it in the box below.';
					htmlnew = htmlnew + '<div><input type="password" name="Loginpassword" class="form-control" maxlength="6" placeholder="123456" id="Loginpassword" /></div>';
					htmlnew = htmlnew + '</div>';
					htmlnew = htmlnew + '<a href="#" class="btn btn-primary" onclick="Authorize();" style="color:#000000">Login</a>';
					
					$("#home-content").html(htmlnew);
					if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
					$("#footer-content").html(footernew);					
					return false;
				}else{
					email = $("#email").html();
					onecode = $("#onecode").val();
					var  myURL = domain + "/balance/index/json"+'/'+email+'/'+onecode;
				}
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
							XGC = data['query']['results']['json']['Total']['result']['Amount'];
				    	fee = data['query']['results']['json']['Total']['result']['Fee'];
							XGC = XGC - fee;
							$("#balance").html(XGC);
							htmlnew = '<h2>Balance</h2>';
							htmlnew = htmlnew + '<h3>'+ XGC +' XGC</h3>';
							htmlnew = htmlnew + '<table class="table table-bordered table-condensed table-hover">';
							htmlnew = htmlnew + '	<tr>';
							htmlnew = htmlnew + '		<th>Date</th>';
							htmlnew = htmlnew + '		<th>IP</th>';
							htmlnew = htmlnew + '		<th>Action</th>';
							htmlnew = htmlnew + '		<th>Amount XGC</th>';
							htmlnew = htmlnew + '	</tr>';
							var length = Object.size(data['query']['results']['json']['transactions']);
							for (key in data['query']['results']['json']['transactions']) {
								element = data['query']['results']['json']['transactions'][key];
									htmlnew = htmlnew + '	<tr>';
									date = new Date(element['DateTime']*1000);
									htmlnew = htmlnew + '		<td>'+formatDate(date,'%Y-%M-%d %H:%m')+'</td>';									
									htmlnew = htmlnew + '		<td>'+element['IP']+'</td>';
									htmlnew = htmlnew + '		<td>'+element['Action']+'</td>';
									htmlnew = htmlnew + '		<td style="text-align:right">'+element['Amount']+' XGC</td>';
									htmlnew = htmlnew + '	</tr>';
							}
								htmlnew = htmlnew + '	</table>';							
							$("#home-content").html(htmlnew);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
							return false;
							},
            error: function(data){
                console.log(data);
            }
        });
		},
		send: function(){
				if($("#email").html()==""){
					app.balance();
					return false;
				}

				if($("#to_email").html()==""){
					var  myURL = domain + "/send/index/json";
					$.ajax({
							url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
							myURL
							+'"&format=json&callback=',
							type: 'GET',
							dataType: 'json',
							success: function(data){
				//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
								htmlnew = '<h2>Send</h2>';
								htmlnew = htmlnew +'<div>';
								htmlnew = htmlnew +'	<input type="hidden" name="Error" id="Error" value="Yes" />';
								htmlnew = htmlnew +'</div><div class="form-group has-error">';
								htmlnew = htmlnew +'	<div class="alert alert-danger">';
								htmlnew = htmlnew +'	Email Address to whom you want to send XGC ';
								htmlnew = htmlnew +'<div><input type="text" name="email" class="form-control" onBlur="CheckEmail(this.value);" placeholder="name@email.com" value="" id="Email" /></div>					</div>';
								htmlnew = htmlnew +'<div id="EmailError">If the user does not claim the amount within a week, then the amount will be returned (credited) back to your account.</div>';
								htmlnew = htmlnew +'</div>';
								htmlnew = htmlnew +'<div class="form-group has-error" >';
								htmlnew = htmlnew +'<div class="alert alert-danger">';
								htmlnew = htmlnew +'XGC Amount from your balance:';
								htmlnew = htmlnew +'<div><input type="text" name="toAmount" class="form-control" maxlength="12" placeholder="99.001" max="'+$("balance").html()+'" onFocus="initialAmount();" onBlur="CheckAmount(this.value,'+$("balance").html()+');" id="toAmount" /></div>					</div>';
								htmlnew = htmlnew +'<div id="amountError"></div>';
								htmlnew = htmlnew +'</div>';
								htmlnew = htmlnew +'<a href="#" class="btn btn-primary" id="SendButton" style="color:#000000" onclick="SendNow();">Send now!</a>';
								$("#home-content").html(htmlnew);
								if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
								$("#footer-content").html(footernew);
								return false;
								},
							error: function(data){
								console.log(data);
							}
					});
				}else{

				}
		},
			deposit: function(){
					if($("#email").html()==""){
						app.balance();
						return false;						
					}

				email = $("#email").html();				
				var  myURL = domain + "/deposit/index/json"+"/"+email;
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
			//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
							htmlnew = '<h2>Deposit</h2>';
							htmlnew = htmlnew +'<div class="container">';
							htmlnew = htmlnew +'<h2>Hi '+email+'</h2>';
							htmlnew = htmlnew +'<div style="text-align:center ">';
							htmlnew = htmlnew +'<h4><strong>Send XGC to</strong>:<br>';
							htmlnew = htmlnew +data['query']['results']['json']['address']+'</h4>';
							htmlnew = htmlnew +'<img src="http://coingreen.com/'+data['query']['results']['json']['dir']+data['query']['results']['json']['address']+'.png" style="border:1px solid black"><br>';
							htmlnew = htmlnew +'<br>';
							htmlnew = htmlnew +'<p>You can also use this address to receive XGC from friends or websites.</p>';
							htmlnew = htmlnew +'<p>A new address will be automatically generated, when we receive payment on this address.<br>';
							htmlnew = htmlnew +'The old address will still be valid for depositing XGC.</p>';
							htmlnew = htmlnew +'</div>';
							htmlnew = htmlnew +'</div>';

							
							$("#home-content").html(htmlnew);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
							return false;
							},
            error: function(data){
                console.log(data);
            }
        });
		},
		withdraw: function(){
				if($("#email").html()==""){
					app.balance();
					return false;						
				}
				var  myURL = domain + "/withdraw/index/json";
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
			//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
							htmlnew = '<h2>Withdraw</h2>';
							$("#home-content").html(htmlnew);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
							return false;
							},
            error: function(data){
                console.log(data);
            }
        });
		},
		download: function(){
				var  myURL = domain + "/download/index/json";
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
			//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
							htmlnew = '<h2>Download</h2>';
							htmlnew = 	htmlnew +'<div class="container">';
							htmlnew = 	htmlnew +'<h3>Windows</h3>';
							htmlnew = 	htmlnew +'<a href="https://sourceforge.net/projects/coingreen/files/Windows/" target="_blank"><img src="http://coingreen.com/img/Windows-icon.png" alt="Windows - CoinGreen" title="Windows - CoinGreen"></a>';
							htmlnew = 	htmlnew +'<h3>Linux</h3>';
							htmlnew = 	htmlnew +'<a href="https://sourceforge.net/projects/coingreen/files/Linux/" target="_blank"><img src="http://coingreen.com/img/Linux-icon.png" alt="Linux - CoinGreen" title="Linux - CoinGreen"></a>';
							htmlnew = 	htmlnew +'<h3>Ubuntu</h3>';
							htmlnew = 	htmlnew +'<a href="https://sourceforge.net/projects/coingreen/files/Ubuntu/" target="_blank"><img src="http://coingreen.com/img/Ubuntu-icon.png" alt="Ubuntu - CoinGreen" title="Ubuntu - CoinGreen"></a>';
							htmlnew = 	htmlnew +'<h3>Android</h3>';
							htmlnew = 	htmlnew +'<a href="https://sourceforge.net/projects/coingreen/files/Andriod/" target="_blank"><img src="http://coingreen.com/img/Android-icon.png" alt="Android - CoinGreen" title="Android - CoinGreen"></a>';
							htmlnew = 	htmlnew +'</div>';
							$("#home-content").html(htmlnew);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
							return false;
							},
            error: function(data){
                console.log(data);
            }
        });
		},
		open: function(){
				var  myURL = domain + "/open/index/json";
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
			//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
							htmlnew = '<h2>Open Source</h2>';
							htmlnew = 	htmlnew +'<div class="container">';
							htmlnew = 	htmlnew +'<a href="https://github.com/GreenCoin-Project/GreenCoin" target="_blank">CoinGreen</a>';
							htmlnew = 	htmlnew +'</div>							';
							$("#home-content").html(htmlnew);
							if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
							$("#footer-content").html(footernew);
							return false;
							},
            error: function(data){
                console.log(data);
            }
        });
		},
		logout: function(){
			logout="";
			$("#email").html(logout);
			$("#home-content").html(html);			
			$("#footer-content").html(footer);
			return false;			
		},
		about: function(){
			$("#home-content").html(aboutus);			
			if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
			$("#footer-content").html(footernew);
			return false;			
		},
		contact: function(){
			$("#home-content").html(contactus);			
			if($("#email").html()!=""){footernew = footerSignin + footer;}else{footernew = footerLogout + footer;}
			$("#footer-content").html(footernew);
			return false;			
		},

 	
};

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function SendPassword(){
	$.getJSON('http://www.coingreen.com/Users/SendPassword/'+$("#Email").val(),
		function(ReturnValues){
			if(ReturnValues['Password']=="Password Not sent"){
				return false;
			}
		}
	);
}
function Authorize(){
	email = $("#Email").val();
	password = $("#Loginpassword").val();
	
	var  myURL = domain + "/balance/index/json/"+email+"/"+password;
	$.ajax({
			url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
			myURL
			+'"&format=json&callback=',
			type: 'GET',
			dataType: 'json',
			success: function(data){
				id = 	data['query']['results']['json']['userIn']['id']['_id'];
				email = 	data['query']['results']['json']['userIn']['email'];	
				$("#email").html(email);
				$("#user_id").html(id);
				$("#onecode").html(password);				
				app.balance();
			},
			error: function(data){
					console.log(data);
			}
	});
}
function SendNow(){

	email = $("#email").html();
	to_email = $("#to_email").html();
	$("#amount").val($("#toAmount").val()); 
	amount = $("#toAmount").val();
	
	var  myURL = domain + "/send/index/json/"+email+"/"+to_email+"/"+amount;
	$.ajax({
			url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
			myURL
			+'"&format=json&callback=',
			type: 'GET',
			dataType: 'json',
			success: function(data){
				$("#to_email").html('');
				$("#amount").val('');
				app.balance();
			},
			error: function(data){
					console.log(data);
			}
	});
}

function CheckEmail(value){
	if(value==""){
		$("#EmailError").html("Cannot be blank!");		
		$("#Error").val("Yes");		
		return false;
	}
	email = $("#email").html();
	if(email==""){		return false;}
	if(value.toLowerCase()==email.toLowerCase()){
		$("#EmailError").html("Cannot send to self!");
		$("#Error").val("Yes");		
		return false;
	}else{
		$("#to_email").html(value);
		$("#EmailError").html("If the user does not claim the amount within a week, then the amount will be returned (credited) back to your account.");
		$("#Error").val("No");
	}
}
function CheckAmount(value,amount){
	if(value>=amount)	{
		$("#amountIcon").attr("class", "glyphicon glyphicon-remove");
		$("#amountError").html("Amount does not match!")
		return false;
	}else{
		$("#amountIcon").attr("class", "glyphicon glyphicon-ok");		
		if($("#Error").val()=="No"){
			$("#SendButton").removeAttr('disabled');
		}else{
			$("#EmailError").html("Cannot send to self! or email blank!");			
			$("#SendButton").attr("disabled", "disabled");			
		}
	}
}
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function formatDate(date, fmt) {
    function pad(value) {
        return (value.toString().length < 2) ? '0' + value : value;
    }
    return fmt.replace(/%([a-zA-Z])/g, function (_, fmtCode) {
        switch (fmtCode) {
        case 'Y':
            return date.getUTCFullYear();
        case 'M':
            return pad(date.getUTCMonth() + 1);
        case 'd':
            return pad(date.getUTCDate());
        case 'H':
            return pad(date.getUTCHours());
        case 'm':
            return pad(date.getUTCMinutes());
        case 's':
            return pad(date.getUTCSeconds());
        default:
            throw new Error('Unsupported format code: ' + fmtCode);
        }
    });
}
function initialAmount(){
	var value = $("#balance").html();
	$("#amountError").html("Amount should be less than "+ value);
}
