<?php 
  global $wpdb;
  $arez_options_arr = get_option('arez_options');
		$api_key = isset($arez_options_arr["api_key"])?$arez_options_arr["api_key"]:"";
?>
<div class="wrap">
<h2>Settings</h2>

<form method="post" action="options.php">
<?php 
	settings_fields( 'arez_options_group' ); 
?>
<table class="form-table">
	<tbody>
		<tr>
			<th scope="row"><label for="arez-apikey">API Key</label></th>
			<td><input name="arez_options[api_key]" type="text" id="api-key" value="<?php echo $api_key;?>" class="regular-text"></td>
		</tr>
		<tr>
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