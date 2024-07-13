export async function getItems(page) {
	const path = `https://picsum.photos/v2/list?page=${page}&limit=15`
	const res = await fetch(path)
	return await res.json()
}

export async function getIdTrackNow() {
	const path = `https://api.raptver.ru/track-now-id`
	const res = await fetch(path)
	return await res.json()
}

export async function getIdTrackNowLikes() {
	const path = `https://api.raptver.ru/track-now-likes`
	const res = await fetch(path)
	return await res.json()
}

export async function getNow() {
	const path = `https://api.raptver.ru/get-now`
	const res = await fetch(path)
	return await res.json()
}
export async function getEfir() {
	const path = `https://api.raptver.ru/get-efir`
	const res = await fetch(path)
	return await res.json()
}


export async function getEfir2(user) {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	let raw = JSON.stringify({ user: user });

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		
	};

	const res = await fetch('https://api.raptver.ru/get-efir2', requestOptions)
	return await res.json()	
}

