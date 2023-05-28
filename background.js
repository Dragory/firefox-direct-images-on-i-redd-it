const filter = {
	urls: [
		// Controlled by "host_permissions" in manifest.json
		"*://*/*",
	],
};

const extraInfoSpec = [
	"blocking",
	"requestHeaders",
];

browser.webRequest.onBeforeSendHeaders.addListener(({ requestHeaders }) => {
	for (const header of requestHeaders) {
		if (header.name.toLowerCase() === 'accept') {
			header.value = 'image/*';
			break;
		}
	}
	return { requestHeaders };
}, filter, extraInfoSpec);
