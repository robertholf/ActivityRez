	  jQuery(document).ready(function(){
					  		
					  		var banner = ['<div class="bannerImage">',
					  		'<div class="carousel slide" id="myCarousel">',
					           '<div class="carousel-inner">',
					                '<div class="item slide1">',
					                    
					                '</div>',
					                '<div class="item slide2">',
					                    
					                '</div>',
					                '<div class="item slide3">',
					                    
					                '</div>',
					  		'</div>',
					  	'</div>',
					  '</div>',
					  '<div class="homeBody">',
					    '<h2>Featured Activities</h2>',
					    '<ul class="featuredActivities clearfix" data-bind="foreach: WebBooker.Homepage.featured_destinations">',
					        '<!-- ko if: activities().length > 0 -->',
					        '<!-- ko foreach: activities -->',
					        '<li>',
					            '<a class="featLink" data-bind="attr: { &#39;href&#39;: url }">',
					                '<div class="min-img-height">',
					                    '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-bind="attr: { &#39;src&#39;: thumbnail_url }, visible: thumbnail_url" alt="Safari!" />',
					                '</div>',
					              	'<div class="details">',
					                	'<div class="feat-item-desc" data-bind="html: title"></div>',
					                    '<p class="detDesc" data-bind="text: shortDesc"></p>',
					                  	'<p class="detPrice">Prices starting at: <span data-bind="money: prices[0].amount"></span></p>',
					              '</div>',
					            '</a>',
					        '</li>',
					        '<!-- /ko -->',
					        '<!-- /ko -->',
					    '</ul>',
					    '<div class="cb"></div>',
					'</div>'].join('');
					  		jQuery('#search-filters-date .collapse-me').show();
					  		jQuery('.heading').after(banner);
					  		if(window.location.hash == '#/Home'){
					 			jQuery('.bannerImage, .homeBody').show();
					    		jQuery('#webbooker, #search-filters, .footer').removeAttr('style');
					  		} else{
					  			jQuery('#webbooker').css({'top': 116});
					  			jQuery('.footer').css({'top': 116});
					  			jQuery('.bannerImage, .homeBody').hide();
					  			jQuery('#search-filters').css({'top': -87});
					  		}
					  		Path.map('#/Home').enter(function(){
					  			jQuery('.bannerImage, .homeBody').show();
					  			jQuery('#search-filters, #webbooker, .footer').removeAttr('style');
					  		}).exit(function(){
					  			jQuery('#webbooker').css({'top': 116});
					  			jQuery('.footer').css({'top': 116});
					  			jQuery('#search-filters').css({'top': -87});
					  			jQuery('.bannerImage, .homeBody').hide();
					  		})
					  		jQuery('.carousel').carousel();
					  		ko.applyBindings(WebBooker,jQuery('.homeBody')[0]);
					 
					   	});