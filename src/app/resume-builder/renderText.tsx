import { Text } from '@react-pdf/renderer';

const START_BOLD = '-*'
const END_BOLD = '*-'

export const renderBoldText = (text: string) => {
    let multipleWordsToFormat: string[] = [];
    let formattedText: JSX.Element[] = [];

    text.split(' ').forEach((word, index) => {
        if (word.includes('~~')) {
            // single word bold
            const singleBoldWord = (
                <Text key={word} style={{ fontWeight: 'bold' }}>
                    {' '}
                    {word.slice(2)}{' '}
                </Text>
            );
            formattedText.push(singleBoldWord);
        } else if (word.includes(START_BOLD)) {
            multipleWordsToFormat.push(word.replace(START_BOLD, ""));
        } else if (word.includes(END_BOLD)) {
            const currentWord = word.replace(END_BOLD, '')
            const stringOfWords =
                multipleWordsToFormat.join(' ') + ' ' + currentWord;
            const multipleBoldWords = (
                <Text key={stringOfWords} style={{ fontWeight: 'bold' }}>
                    {' '}
                    {stringOfWords}{' '}
                </Text>
            );
            formattedText.push(multipleBoldWords);

            // empty temp arr since all the words have been formatted (made bold)
            multipleWordsToFormat = [];
        } else if (multipleWordsToFormat.length > 0) {
            // if there are words in the array, we want to keep pushing because having the temp
            // arr greater than 0 means that we have encountered START_BOLD. The temp arr will be  
            // emptied when we come to the word with END_BOLD
            multipleWordsToFormat.push(word);
        } else {
            const singleWord =
            // if the word is the first word in the sentence, we do not want to add a space in the 
            // beginning 
                index === 0 ? (
                    <Text key={word}>{word} </Text>
                ) : (
                    <Text key={word}> {word} </Text>
                );
            formattedText.push(singleWord);
        }
    });
    return formattedText;
};
