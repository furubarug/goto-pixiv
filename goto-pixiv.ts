function main() {
	let creatorId: string | undefined;
	if (window.location.origin === 'https://www.fanbox.cc') {
		creatorId = window.location.href.match(/fanbox.cc\/@([^\/]*)/)?.[1];
	} else if (window.location.href.match(/^https:\/\/(.*)\.fanbox\.cc\//)) {
		creatorId = window.location.href.match(/^https:\/\/(.*)\.fanbox\.cc\//)?.[1];
	}
	if (!creatorId) {
		alert(`ここどこですか(${window.location.href})`);
		return;
	}
	const userId = get<{ body?: { user: { userId: string } } }>(
		`https://api.fanbox.cc/creator.get?creatorId=${creatorId}`,
	).body?.user.userId;
	if (!userId) {
		alert('APIエラー');
		return;
	}
	document.location.href = `https://www.pixiv.net/users/${userId}`;
}

function get<T = unknown>(url: string): T {
	const request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.withCredentials = true;
	request.send(null);
	return JSON.parse(request.responseText) as T;
}

main();
