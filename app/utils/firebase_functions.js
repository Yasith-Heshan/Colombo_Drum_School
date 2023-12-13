import {db, storage} from "@/app/firebase";
import {addDoc, collection, getDocs, runTransaction, serverTimestamp} from 'firebase/firestore'
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid"


//save blog
export const saveBlog = async (data)=>{
    const image = data.image;
    const imagePath = `images/${image.name+v4()}`


    try{
        await runTransaction(db,async ()=>{
            const imageRef = ref(storage,imagePath)
             await uploadBytes(imageRef, image);

             await addDoc(collection(db,'blogs'),{
                title:data.title,
                thumbnail: imagePath,
                blog: data.content,
                createdAt: serverTimestamp()
            });
            console.log('success');
        })
    }catch (e){
        console.error('Transaction Failed',e);
    }


}

//retrieve blog
export const retrieveBlog = async ()=>{
    // console.log('retrieve called');

    try {
        // console.log('try block')
        const blogList = [];
        await runTransaction(db,
            async ()=>{
                const documentSnapshots = await getDocs(collection(db,"blogs"));
                const imageListRef = ref(storage,'images/');
                const response = await listAll(imageListRef);


                documentSnapshots.forEach((doc)=>{
                    const documentData = doc.data()
                    const data= {
                        title: documentData.title,
                        blog: documentData.blog,
                        createdAt: documentData.createdAt,
                    }
                    // console.log(documentData);
                    response.items.forEach(
                        async (item)=>{
                            if(item._location.path === documentData.thumbnail){
                                data['thumbnail'] = await getDownloadURL(item);
                            }
                        }
                    )
                    // console.log(data);
                    blogList.push(data);
                });
                // console.log(blogList);
            }

        );
        return blogList;
    }catch (e){
        console.error('Transaction Failed',e);
        return [];
    }


}


