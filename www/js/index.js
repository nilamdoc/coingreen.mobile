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
							$("#UUsers").html(data['query']['results']['json']['result']['users']);
							$("#UOnline").html(data['query']['results']['json']['result']['online']);							
							$("#UPending").html(data['query']['results']['json']['result']['PendingOrders']);
							$("#UCompleted").html(data['query']['results']['json']['result']['CompletedOrders']);							
							var length = data['query']['results']['json']['result']['DetailPendingOrders']['result'].length,
							element = null,
									
							html = '<table class="table table-condensed table-bordered table-hover"><thead><tr><th>Action</th><th>First</th><th>Second</th><th>Count</th><th>BTC</th><th>Amount</th><th>Price</th></tr></thead><tbody>';
							for (var i = 0; i < length; i++) {
								element = data['query']['results']['json']['result']['DetailPendingOrders']['result'][i];

								html = html + '<tr>';
								html = html + '<td>'+element['_id']['Action']+'</td>';
								html = html + '<td>'+element['_id']['FirstCurrency']+'</td>';
								html = html + '<td>'+element['_id']['SecondCurrency']+'</td>';
								html = html + '<td>'+element['count']+'</td>';								
								html = html + '<td>'+Math.round(element['Amount']*1000000)/1000000+'</td>';
								html = html + '<td>'+Math.round(element['TotalAmount']*1000)/1000+'</td>';
								html = html + '<td>'+Math.round(element['TotalAmount']/element['Amount']*1000)/1000+'</td>';
								html = html + '</tr>';
							}
								html = html + '</tbody></table>';
								$("#UDetailPendingOrders").html(html);								
								// Do something with element i.
							var length = data['query']['results']['json']['result']['DetailCompletedOrders']['result'].length,
							element = null,
									
							html = '<table class="table table-condensed table-bordered table-hover"><thead><tr><th>Action</th><th>First</th><th>Second</th><th>BTC</th><th>Count</th><th>Amount</th><th>Price</th></tr></thead><tbody>';
							for (var i = 0; i < length; i++) {
								element = data['query']['results']['json']['result']['DetailCompletedOrders']['result'][i];

								html = html + '<tr>';
								html = html + '<td>'+element['_id']['Action']+'</td>';
								html = html + '<td>'+element['_id']['FirstCurrency']+'</td>';
								html = html + '<td>'+element['_id']['SecondCurrency']+'</td>';
								html = html + '<td>'+element['count']+'</td>';								
								html = html + '<td>'+Math.round(element['Amount']*1000000)/1000000+'</td>';
								html = html + '<td>'+Math.round(element['TotalAmount']*1000)/1000+'</td>';
								html = html + '<td>'+Math.round(element['TotalAmount']/element['Amount']*1000)/1000+'</td>';
								html = html + '</tr>';
							}
								html = html + '</tbody></table>';
								$("#UDetailCompletedOrders").html(html);								
								// Do something with element i.

							var length = data['query']['results']['json']['result']['Details'].length,
							element = null,BTC=0,GBP=0,USD=0,EUR=0,
									
							html = '<table class="table table-condensed table-bordered table-hover"><thead><tr><th>#</th><th>Username</th><th>Verify</th><th>Full Name</th><th>TOTP</th><th>BTC</th><th>GBP</th><th>USD</th><th>EUR</th></tr></thead><tbody>';
							for (var i = 0; i < length; i++) {
								element = data['query']['results']['json']['result']['Details'][i];

								html = html + '<tr>';
								html = html + '<td>'+(i+1)+'</td>';								
								html = html + '<td><a href="user.html?user='+element['username']+'">'+element['username']+'</a></td>';
								html = html + '<td>';
								if(element['BankVerified']=="null"){
									html = html + '<span class="label">B</span>';
								}
								if(element['BankVerified']=="No"){
									html = html + '<span class="label label-important">B</span>';
								}
								if(element['BankVerified']=="Yes"){								
									html = html + '<span class="label label-success">B</span>';
								}
								if(element['GovtVerified']=="null"){
									html = html + '<span class="label">G</span>';
								}
								if(element['GovtVerified']=="No"){
									html = html + '<span class="label label-important">G</span>';
								}
								if(element['GovtVerified']=="Yes"){								
									html = html + '<span class="label label-success">G</span>';
								}
								if(element['UtilVerified']=="null"){
									html = html + '<span class="label">P</span>';
								}
								if(element['UtilVerified']=="No"){
									html = html + '<span class="label label-important">P</span>';
								}
								if(element['UtilVerified']=="Yes"){								
									html = html + '<span class="label label-success">P</span>';
								}
								html = html + '</td>';
								html = html + '<td>'+element['firstname']+' '+element['lastname']+'</td>';								
								html = html + '<td>';
								if(element['TOTPvalidate']=="null"){
									html = html + '<span class="label">V</span>';
								}
								if(element['TOTPvalidate']=="false"){
									html = html + '<span class="label label-important">V</span>';
								}
								if(element['TOTPvalidate']=="true"){								
									html = html + '<span class="label label-success">V</span>';
								}								
								if(element['TOTPlogin']=="null"){
									html = html + '<span class="label">L</span>';
								}
								if(element['TOTPlogin']=="false"){
									html = html + '<span class="label label-important">L</span>';
								}
								if(element['TOTPlogin']=="true"){								
									html = html + '<span class="label label-success">L</span>';
								}								
								if(element['TOTPsecurity']=="null"){
									html = html + '<span class="label">S</span>';
								}
								if(element['TOTPsecurity']=="false"){
									html = html + '<span class="label label-important">S</span>';
								}
								if(element['TOTPsecurity']=="true"){								
									html = html + '<span class="label label-success">S</span>';
								}								
								if(element['TOTPwithdrawal']=="null"){
									html = html + '<span class="label">W</span>';
								}
								if(element['TOTPwithdrawal']=="false"){
									html = html + '<span class="label label-important">W</span>';
								}
								if(element['TOTPwithdrawal']=="true"){								
									html = html + '<span class="label label-success">W</span>';
								}								
								
								BTC = BTC + Math.round(element['BTC']*10000000)/10000000;
								BTC = BTC + Math.round(element['Sell']['BTC-GBP']['Amount']*10000000)/10000000;
								BTC = BTC + Math.round(element['Sell']['BTC-EUR']['Amount']*10000000)/10000000;
								BTC = BTC + Math.round(element['Sell']['BTC-USD']['Amount']*10000000)/10000000;
								GBP = GBP + Math.round(element['GBP']*1000)/1000;
								GBP = GBP + Math.round(element['Buy']['BTC-GBP']['TotalAmount']*1000)/1000;
								USD = USD + Math.round(element['USD']*1000)/1000;
								USD = USD + Math.round(element['Buy']['BTC-USD']['TotalAmount']*1000)/1000;
								EUR = EUR + Math.round(element['EUR']*1000)/1000;
								EUR = EUR + Math.round(element['Buy']['BTC-EUR']['TotalAmount']*1000)/1000;



								html = html + '</td>';
								html = html + '<td>'+(Math.round(element['BTC']*10000000)/10000000).toFixed(10)+'<br>';
								html = html + (Math.round(element['Sell']['BTC-GBP']['Amount']*10000000)/10000000+Math.round(element['Sell']['BTC-USD']['Amount']*10000000)/10000000+Math.round(element['Sell']['BTC-EUR']['Amount']*10000000)/10000000).toFixed(10);
								html = html +	'</td>';																
								html = html + '<td>'+(Math.round(element['GBP']*1000)/1000).toFixed(4)+'<br>';
								html = html + (Math.round(element['Buy']['BTC-GBP']['TotalAmount']*1000)/1000).toFixed(4)+'</td>';																								
								html = html + '<td>'+(Math.round(element['USD']*1000)/1000).toFixed(4)+'<br>';
								html = html + (Math.round(element['Buy']['BTC-USD']['TotalAmount']*1000)/1000).toFixed(4)+'</td>';																								
								html = html + '<td>'+(Math.round(element['EUR']*1000)/1000).toFixed(4)+'<br>';
								html = html + (Math.round(element['Buy']['BTC-EUR']['TotalAmount']*1000)/1000).toFixed(4)+'</td>';																								
								html = html + '</tr>';
							}
								html = html + '</tbody></table>';
								$("#UUsersCount").html(length);								
								$("#UUsersDetails").html(html);								

						$("#UBTC").html(BTC);
						$("#UGBP").html(GBP);
						$("#UEUR").html(EUR);
						$("#UUSD").html(USD);						

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
		balance: function(){
				var  myURL = domain + "/balance/index/json";
        $.ajax({
            url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
						myURL
						+'"&format=json&callback=',
            type: 'GET',
            dataType: 'json',
            success: function(data){
			//				data['query']['results']['json']['Total']['result']['_id']['Amount']);
							htmlnew = '<h2>Balance</h2>';
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
			deposit: function(){
				var  myURL = domain + "/deposit/index/json";
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
		withdraw: function(){
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
							htmlnew = '<h2>download</h2>';
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
							htmlnew = '<h2>open</h2>';
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
				},
			error: function(data){
					console.log(data);
			}
	});

	}