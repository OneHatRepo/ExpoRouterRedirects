import { Text, View } from 'react-native';;
import { useRouter, } from "expo-router";

export default function Page() {
	const router = useRouter();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<h1>/page1</h1>
			<Text onPress={() => { router.push('/page2'); }}>Go to /page2, which should redirect to /page3, but fails</Text>
			<Text onPress={() => { router.push('/page4'); }}>Go to /page4, which successfully redirects to /page5</Text>
		</View>
	);
}
