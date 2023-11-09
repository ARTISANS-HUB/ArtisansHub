	let user_type = localStorage.getItem('user_type');
    let isAuthenticated = localStorage.getItem('isAuthenticated');

	const admin = () => {
	//checking user authentication
	if ( user_type === 'admin' ) {
	return;
	}else{
	window.location.href = '/';

	}

	}


	const buyer = () => {
	if ( user_type === 'buyer') {
	return; 
	}else{

	window.location.href = '/';

	}
}


	const artisan = () => {
	if ( user_type === 'artisan') {
     return ;
	}else{

	window.location.href = '/';

	}
	}
	
	export  { admin , buyer , artisan }