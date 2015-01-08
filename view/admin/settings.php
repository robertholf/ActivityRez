<?php 
  global $wpdb;
  $arez_options_arr = get_option('arez_options');
  	  $arez_api_key = isset($arez_options_arr["arez_api_key"])?$arez_options_arr["arez_api_key"]:"";
   $arez_api_secret = isset($arez_options_arr["arez_api_secret"])?$arez_options_arr["arez_api_secret"]:"secret";
    			

?>
<div class="wrap">
<h2>Settings</h2>

<form method="post" action="options.php">
<?php 
	settings_fields( 'arez-settings-group' ); 
?>
<table class="form-table">
	<tbody>
		<tr>
			<th scope="row"><label for="arez-apikey">API Key</label></th>
			<td><input name="arez_options[arez_api_key]" type="text" id="arez-apikey" value="<?php echo $arez_api_key;?>" class="regular-text"></td>
		</tr>
		<tr>
			<th scope="row"><label for="arez-apipassword">API Secret</label></th>
			<td>
			<input name="arez_options[arez_api_secret]" type="password" id="arez-apipassword" value="<?php echo $arez_api_secret;?>" class="regular-text">
			<p class="description">
			Get your API access at <a href="https://www.activityrez.com" target="_blank">https://www.activityrez.com</a>
			</p>
			</td>
		</tr>
	</tbody>
</table>

<p class="submit">
<input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes"></p>
</form>

</div>