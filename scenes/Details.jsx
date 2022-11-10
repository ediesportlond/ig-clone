import Post from '../components/Post';
import photolist from '../photolist';

export default function Details({ route: { params: { itemId } }, navigation }) {
    const post = photolist.find(photo => photo.id == itemId);
    return (
        <Post post={post} navigation={navigation}/>
    )
}