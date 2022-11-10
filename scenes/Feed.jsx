import { ScrollView } from 'react-native';
import Post from '../components/Post';
import styles from '../styles';
import photolist from '../photolist';

export default function Feed({navigation}) {
    return (
        <>
            <ScrollView style={styles.feed} >
                {
                    photolist.map(post=>(
                        <Post navigation={navigation} key={post.id} post={post}/>
                    ))
                }
            </ScrollView>
        </>
    )
}