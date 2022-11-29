import { Box, Text, useBreakpointValue } from "@chakra-ui/react";


export default function Lyric(): JSX.Element {
    const fontSize = useBreakpointValue(
        {
            base: 'l',
            md: 'xl',
        },
        {
            fallback: 'md',
        }
    )

    return (
        <>
            <Box maxWidth={700} p={15} >
                <Text fontSize={fontSize} pt={7} color='teal.500'>နာကျင်စရာ....ခဏမေ့ထားလိုက်....လာပါရှေ့ဆက်သွားမယ်</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>အရှုံးပေးလို့....မဖြစ်တာ...ဒီတိုက်ပွဲ.....အသက်တွေတောင်စတေးခဲ့ပြီးပြီပဲ...</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ငါတို့....သွေးအေးလို့ မဖြစ်ဖူး...လာပါရုန်းထ...စို့ကွယ်....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>နေ့ရက်တိုင်းဟာ...အရေးကြီးဆုံးပါပဲ....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ရောင်နီလာတော့....မယ်...</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>သူရဲကောင်းတွေအတွက်....ငါတို့တစ်တွေ....သမိုင်းမှာ....မော်ကွန်းတင်ထားမယ်.....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>မပြည့်စုံသေးတဲ့...သူတို့ ရည်မှန်းချက်တွေ....လက်တွဲဖော်ဆောင်ကြမယ်....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>နှလုံးသားထဲမှာ....ဆွဲမြဲမှတ်ထား....ဘယ်သူခွဲခွဲ....သွေးမကွဲနဲ့....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ဒါငါတို့ရဲ့အောင်ပွဲ....ကမ္ဘာတည်စေမယ်....ဒါငါတို့ရဲ့တိုက်ပွဲ...</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ငါတို့လဲကျလို့မဖြစ်ဘူး.....တဖန်ပြန်ရုံးထစို့ကွယ်....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>နေ့ရက်တိုင်းဟာ...အရေးပါဆုံးပါပဲ.......</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ရောင်နီတော့မယ်.....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>သူရဲကောင်းတွေအတွက်....ငါတို့တစ်တွေ....သမိုင်းမှာ....မှတ်တမ်းတင်ထားမယ်.....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>မပြည့်စုံသေးတဲ့...သူတို့ ရည်မှန်းချက်တွေ....လက်တွဲဖော်ဆောင်စို့ကွယ်....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>နှလုံးသားထဲမှာ....ဆွဲမြဲမှတ်ထား....ဘယ်လိုခွဲခွဲ....သွေးမကွဲနဲ့....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ဒါငါတို့ရဲ့အောင်ပွဲ....ကမ္ဘာတည်စေမယ်....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>သူရဲကောင်းတွေအတွက်....ငါတို့တစ်တွေ....သမိုင်းမှာ....မော်ကွန်းတင်ထားမယ်.....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>မပြည့်စုံသေးတဲ့...သူတို့ ရည်မှန်းချက်တွေ....လက်တွဲဖော်ဆောင်စို့ကွယ်....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>နှလုံးသားထဲမှာ....ဆွဲမြဲမှတ်ထား....ဘယ်သူခွဲခွဲ....သွေးမကွဲနဲ့....</Text>
                <Text fontSize={fontSize} pt={7} color='teal.500'>ဒါငါတို့ရဲ့အောင်ပွဲ....ကမ္ဘာတည်စေမယ်....ဒါငါတို့ရဲ့အောင်ပွဲ....ဒါငါတို့ရဲ့တိုက်ပွဲ....</Text>
            </Box>
        </>
    )
}