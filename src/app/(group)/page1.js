import { Text, View } from 'react-native';;
import { useRouter, } from "expo-router";

export default function Page() {
	const router = useRouter();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<h1>/page1</h1>
			<Text onPress={() => { router.push('/page2'); }}>Go to /page3, via redirect from /page2 - FAILS</Text>
			<Text onPress={() => { router.push('/page3'); }}>Go to /page3, directly - WORKS</Text>
			<Text onPress={() => { router.push('/page4'); }}>Go to /page5, via redirect from /page4 - WORKS</Text>
		</View>
	);
}
