import {db, storage} from "@/app/firebase";
import {addDoc, collection, getDocs, runTransaction, serverTimestamp} from 'firebase/firestore'
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid"


//save blog
export const saveBlog = async (data) => {
    const image = data.thumbnail;
    const imagePath = `images/${v4()+image.name}`;


    await runTransaction(db, async () => {
        const imageRef = ref(storage, imagePath)
        await uploadBytes(imageRef, image);
        await addDoc(collection(db, 'blogs'), {
            title: data.title,
            thumbnail: imagePath,
            blog: data.content,
            studentOnly:data.studentOnly,
            published:data.published,
            createdAt: serverTimestamp()
        });
    })


}

//retrieve blog
export const retrieveBlogs = async () => {
    const blogList = [];
    await runTransaction(db, async () => {
        const documentSnapshots = await getDocs(collection(db, "blogs"));
        const imageListRef = ref(storage, 'images/');
        const response = await listAll(imageListRef);

        await Promise.all(documentSnapshots.docs.map(async (doc) => {
            const documentData = doc.data();
            const data = {
                title: documentData.title,
                blog: documentData.blog,
                createdAt: documentData.createdAt.toDate().toLocaleDateString(),
                studentOnly:documentData.studentOnly,
            };

            const matchingImage = response.items.find((item) => item._location.path === documentData.thumbnail);

            if (matchingImage) {
                data['thumbnail'] = await getDownloadURL(matchingImage);
            }

            blogList.push(data);
        }));
    });

    return blogList;
};





