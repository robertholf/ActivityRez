
/**


//This file handles all the wp-admin logic when webbookers is running standalone

// Meta to include the webbooker ID
add_action("admin_init", "wbid_init");
function wbid_init() {
	add_meta_box("wb_id_meta", "Webbooker ID", "wb_id_meta", "webBooker", "normal", "high");


    //note this should only be called if you are in our admin page
    if( 'arez_plugin' == $_REQUEST['page'] && !defined('FAPI_PLUGIN_DIR')) remoteAuth();
}
function wb_id_meta() {
	global $post;
	$webbookerID = get_post_meta( $post->ID, 'webBookerID', true );
	$include_header = get_post_meta( $post->ID, 'include_header', true );
	$include_footer = get_post_meta( $post->ID, 'include_footer', true );

	?>
    <table cellpadding="2" cellspacing="3" border="0" width="100%">
        <tr>
            <td width="160"><?php echo __('Web Booker ID#','arez') . "<br />" . sprintf(__('(Get It %s Here %s)','arez'), '<a href="https://secure.activityrez.com/admin/myweb/">', '</a>'); ?></td>
            <td><input type="text" name="webbooker_id" id="webbooker_id" class="widefat" value="<?php echo $webbookerID; ?>" /></td>
        </tr>
        <tr>
        	<td><?php echo __("Include Site wide Header",'arez');?></td>
        	<td><input type="checkbox" name="include_header" id="include_header" class="widefat" value="1" <?php if( 1 == $include_header){ echo "checked='checked'"; } ?> /></td>
        </tr>
        <tr>
        	<td><?php echo __("Include Site wide Footer",'arez');?></td>
        	<td><input type="checkbox" name="include_footer" id="include_footer" class="widefat" value="1" <?php if( 1 == $include_footer){ echo "checked='checked'"; } ?> /></td>
        </tr>
    </table>
    <?php
}

function arez_wb_save_postdata( $post_id ){
	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) 
	  return $post_id;
	
	// Check the user's permissions.
	if ( 'webBooker' == $_POST['post_type'] ) {
	
		if ( ! current_user_can( 'edit_page', $post_id ) )
		    return $post_id;
	
	} else {
	
		if ( ! current_user_can( 'edit_post', $post_id ) )
		    return $post_id;
	}
	
	/* OK, its safe for us to save the data now. */
	
	// Sanitize user input.
	$webbookerID = sanitize_text_field( $_POST['webbooker_id'] );
	$include_header = sanitize_text_field( $_POST['include_header'] );
	$include_footer = sanitize_text_field( $_POST['include_footer'] );
	
	// Update the meta field in the database.
	update_post_meta( $post_id, 'webBookerID', $webbookerID );
	
	if(1 == $include_header) update_post_meta( $post_id, 'include_header', 1 );
	else update_post_meta( $post_id, 'include_header', 'off' );
	
	if(1 == $include_footer) update_post_meta( $post_id, 'include_footer', 1 );
	else update_post_meta( $post_id, 'include_footer', 'off' );
}

add_action( 'save_post', 'arez_wb_save_postdata' );
if( !function_exists ('activityrezAdminMenu') ){
	function activityrezAdminMenu(){
		global $activityrez;
		$options = get_option( 'arez_plugin' );
		if( isset($options['server']) && 'secure' == $options['server']){
			$admin_url = AREZ_SERVER;
		}else{
			$admin_url = AREZ_SERVER_TRAINING;
		}
		$activityrez['adminMenu'] = add_menu_page(__('ActivityRez','arez'),__('ActivityRez','arez'),'administrator','arez','',ACTIVITYREZWB_PLUGIN_PATH.'/assets/AR_LogoFinal.png');

		//add_submenu_page( 'arez', 'Admin', 'Admin','administrator',$admin_url);
		global $submenu;
		$submenu['arez'][500] = array( 'Admin', 'manage_options' , $admin_url );
	}
	add_action('admin_menu', 'activityrezAdminMenu');
}

function arez_plugin_help($contextual_help, $screen_id, $screen) {
	if ($screen_id == 'edit-webbooker' || $screen_id == 'settings_page_arez_plugin') {
		$contextual_help = <<< heredoc
		<div>
			<a href='http://activityrez.com' target='_blank'><img src='https://www.activityrez.com/wp-content/themes/empyrean/images/arezLogoColor.png'></a>
		</div>
		<ul>
			<li> <a href='https://secure.activityrez.com' target='_blank'>ActivityRez Admin</a></li>
			<li>Having Trouble?  Visit <a href='https://support.activityrez.com' target='_blank'>https://support.activityrez.com</a> for knowledgebase and live support</li>
			<li><a href='https://blog.activityrez.com' target='_blank'>ActivityRez Blog</a></li>
		</ul>
		
		<!-- begin olark code -->
		<script data-cfasync="false" type='text/javascript'>/*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
		f[z]=function(){
		(a.s=a.s||[]).push(arguments)};var a=f[z]._={
		},q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
		f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
		0:+new Date};a.P=function(u){
		a.p[u]=new Date-a.p[0]};function s(){
		a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
		hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
		return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
		b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
		b.contentWindow[g].open()}catch(w){
		c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
		var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
		b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
		loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
		/* custom configuration goes here (www.olark.com/documentation) */
		olark.identify('5319-287-10-8779');/*]]>*/</script><noscript><a href="https://www.olark.com/site/5319-287-10-8779/contact" title="Contact us" target="_blank">Questions? Feedback?</a> powered by <a href="http://www.olark.com?welcome" title="Olark live chat software">Olark live chat software</a></noscript>
		<!-- end olark code -->
heredoc;
	}
	return $contextual_help;
}

add_filter('contextual_help', 'arez_plugin_help', 10, 3);






// Register and define the settings
add_action('admin_init', 'arez_plugin_admin_init');
function arez_plugin_admin_init(){
	register_setting( 'arez_plugin_options', 'arez_plugin', 'arez_plugin_validate_options' );
	add_settings_section( 'arez_plugin_main', __("Settings",'arez'), 'arez_plugin_section_text', 'arez_plugin' );
	arez_plugin_add_page( 'arez_plugin[username]', __("Username",'arez'), 'arez_plugin_setting_username', 'arez_plugin', 'arez_plugin_main' );
	add_settings_field( 'arez_plugin[password]', __("Password",'arez'), 'arez_plugin_setting_password', 'arez_plugin', 'arez_plugin_main' );
	add_settings_field( 'arez_plugin[server]', __("Environment",'arez'), 'arez_plugin_setting_server', 'arez_plugin', 'arez_plugin_main' );
}

// Draw the section header
function arez_plugin_section_text() {
	echo '<p>Enter your settings here.</p>';
}

// Display and fill the form field
function arez_plugin_setting_username() {
	// get option 'text_string' value from the database
	$options = get_option( 'arez_plugin' );
	$text_string = $options['username'];
	// echo the field
	echo "<input id='text_string' name='arez_plugin[username]' type='text' value='$text_string' />";
}
function arez_plugin_setting_password() {
	// get option 'text_string' value from the database
	$options = get_option( 'arez_plugin' );
	$text_string = $options['password'];
	// echo the field
	echo "<input id='text_string' name='arez_plugin[password]' type='password' value='$text_string' />";
}

function arez_plugin_setting_server() {
	// get option 'text_string' value from the database
	$options = get_option( 'arez_plugin' );
	$text_string = $options['server'];
	// echo the field
	echo "<label>Production: <input id='radio' name='arez_plugin[server]' type='radio' value='secure' " . (( $text_string == 'secure' ) ? "checked='checked'" : '') . " /></label>";
	echo "<label>Training: <input id='radio' name='arez_plugin[server]' type='radio' value='training' " . (( $text_string == 'training' ) ? "checked='checked'" : '') . " /></label>";
}

// Validate user input (we want text only)
function arez_plugin_validate_options( $input ) {
	$valid = array();
	//arezLog('wbStandalone',print_r($input,1));

	if( isset( $input['username'] ) && !empty( $input['username'] ) ){
		$valid['username'] = $input['username'];
	}

	if( isset( $input['password'] ) && !empty( $input['password'] ) ){
		$valid['password'] = $input['password'];
	}

	if( isset( $input['api_key'] ) && !empty( $input['api_key'] ) ){
		$valid['api_key'] = $input['api_key'];
	}
	
	if( isset( $input['server'] ) && !empty( $input['server'] ) ){
		$valid['server'] = $input['server'];
	}
	return $valid;
}

*/
