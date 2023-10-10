import { Text } from "@react-pdf/renderer"

export const renderText = (text: string) => {
    return text.split(" ").map(word => {
        if(word.includes("~~")) {
            console.log({word})
            return <Text style={{fontWeight: "bold"}}>{" "}{word.slice(2)}{" "}</Text>
        }
        else {
            return <Text>{" "}{word}{" "}</Text>
        }
    })
}
