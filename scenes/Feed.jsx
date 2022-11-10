import { ScrollView } from 'react-native';
import Post from '../components/Post';
import styles from '../styles';
import photolist from '../photolist';

export default function Feed() {
    return (
        <>
            <ScrollView style={styles.feed} >
                {
                    photolist.map(post=>(
                        <Post key={post.id} post={post}/>
                    ))
                }
            </ScrollView>
        </>
    )
}