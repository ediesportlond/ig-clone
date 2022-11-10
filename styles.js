import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    feed: {
        flex: 1, //Take up entire vertical view
        backgroundColor: 'white',
    },
    card: {
        marginVertical: 20,
    },
    cardHeader: {
        margin: 4,
        flexDirection: 'row',
    },
    username: {
        margin: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        margin: 16,
        fontSize: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    }
})

export default styles;