import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    feed: {
        flex: 1, //Take up entire vertical view
        backgroundColor: 'black',
        // marginTop: 52,
        paddingTop: 52,
    },
    card: {
        marginVertical: 20,
    },
    cardHeader: {
        margin: 4,
        flexDirection: 'row',
    },
    username: {
        color: 'white',
        margin: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        margin: 16,
        color: 'white',
        fontSize: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    }
})

export default styles;