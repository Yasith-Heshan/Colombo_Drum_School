"use client"
import Editor from "@/app/components/Editor";
import {Button, FileInput, Select, TextInput} from 'flowbite-react';
import {Controller, useForm} from "react-hook-form"
import {object, string,mixed} from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {saveBlog} from "@/app/utils/firebase_functions";


const CreateBlog = () => {



    const schema = object(
        {
            title: string().required('Title is required').min(1, 'Invalid title'),
            thumbnail:mixed().required('File is required'),
            content:string().required('Content is required')
        }
    )

    const {
        control,
        formState: {errors},
        handleSubmit,
        setValue,
        getValues
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleSave = async () => {
        const data = {
            title: getValues('title'),
            thumbnail: getValues('thumbnail'),
            blog: getValues('content'),
            studentOnly:getValues('studentOnly')==='studentOnly',
            published:false,
        }
        await saveBlog(data);
    }

    const handlePublish = async () => {
        const data = {
            title: getValues('title'),
            thumbnail: getValues('thumbnail'),
            content: getValues('content'),
            studentOnly:getValues('studentOnly')==='studentOnly',
            published:true,
        }
        await saveBlog(data);
    }

    const handleContentChange = (content)=>{
        setValue('content',content);
    }


    return (
        <>
            <div className={'m-10 p-10 bg-gray-200 dark:bg-gray-700 rounded shadow-lg shadow-gray-400'}>
                <form onSubmit={handleSubmit(
                    async (data) => {
                        await handlePublish(data);
                    })}
                >
                    <div className="sm:flex sm:justify-between sm:items-start gap-1">
                        <Controller
                            control={control}
                            name='title'
                            render={
                                ({field}) => (
                                    <div className={'mb-5'}>
                                        <TextInput
                                            {...field}
                                            color={errors.title ? 'failure' : 'gray'}
                                            placeholder={'Title'}
                                            value={field.value || ''}
                                            helperText={errors.title && <span>{errors.title.message}</span>}
                                        />
                                    </div>
                                )
                            }
                        />

                        <Controller render={
                            ({field})=>(
                                <Select {...field}>
                                    <option defaultChecked={true} value={'public'}>Public</option>
                                    <option value={'studentOnly'}>Student Only</option>
                                </Select>
                            )
                        }
                                    control={control}
                                    name='studentonly'/>

                        <div className={'mb-5'}>
                            <Controller render={({field}) => (
                                <FileInput {...field} id={'file-input'} title={'Choose Thumbnail'}
                                           helperText={'Upload Thumbnail'}
                                           color={errors.thumbnail ? 'failure' : ''}
                                           onChange={(event) => {
                                               setValue('thumbnail',event.target.files[0])
                                           }}
                                />
                            )}
                                        name='thumbnail'
                                        control={control}
                            />
                        </div>

                    </div>
                    <Editor content={getValues('content')} setContent={handleContentChange}/>
                    <div className={'flex justify-end items-center gap-3 pt-5'}>
                        <Button onClick={handleSave}>Save</Button>
                        <Button type={'submit'}>Publish</Button>
                    </div>
                </form>

            </div>
        </>

    )
        ;
}

export default CreateBlog;
