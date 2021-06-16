import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container, ImgUploadedPreviewContainer, SelectFileButton } from './styles';
import plusGrayIcon from '../../../assets/images/icons/plus-gray.svg';
interface IImgUploadFieldProps {
    base64File: string | undefined;
    setBase64File(base64File: string): void;
    disabled: boolean;
}

const ImgUploadField: React.FC<IImgUploadFieldProps> = ({ base64File, setBase64File, disabled }) => {
    const accepetdFileTypes = ['image/jpeg', 'image/png'];

    const [uploadedFile, setUploadedFile] = useState<File>();

    const [errorMessage, seterrorMessage] = useState('');

    const getBase64FromFile = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                console.log(reader.result)
                resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });
    }

    const onDrop = (files: File[]) => {
        (document.getElementById('file-upload-container') as HTMLElement).style.opacity = '1'
        const uploadedFile = files[0];

        if(accepetdFileTypes.includes(uploadedFile.type)) {
            seterrorMessage('');
            
            setUploadedFile(Object.assign(uploadedFile, {
                preview: URL.createObjectURL(uploadedFile)
            }));

            getBase64FromFile(uploadedFile).then((base64UploadedFile: unknown) => setBase64File(base64UploadedFile as string));
        } else {
            setUploadedFile(undefined);
            seterrorMessage('Tipos de arquivos permitidos: .png e .jpeg');
        }
    }

    return (       
        <Dropzone
            onDrop={onDrop}
            onDragEnter={() => (document.getElementById('file-upload-container') as HTMLElement).style.opacity = '0.5'}
            onDragLeave={() => (document.getElementById('file-upload-container') as HTMLElement).style.opacity = '1'}
            disabled={disabled}
        >
            {({getRootProps, getInputProps}) => (
                <Container {...getRootProps()} id="file-upload-container">
                    <input {...getInputProps()} />
                    
                    {   !uploadedFile &&
                        <>
                            <img src={plusGrayIcon} alt="plus" />
                            <SelectFileButton>Selecione um arquivo</SelectFileButton>
                            <p>Arraste e solte</p>

                            {   errorMessage && 
                                <span className="error">{ errorMessage }</span>

                            }
                        </>
                    }

                    {   uploadedFile !== undefined &&
                        <>
                            <ImgUploadedPreviewContainer>
                                <div className="img-preview">
                                    <img src={(uploadedFile as any).preview} alt="img uploaded"/>
                                </div>

                                <p>Arraste e solte, ou clique para substituir</p>
                            </ImgUploadedPreviewContainer>
                            <span className="filename">{uploadedFile.name}</span>
                        </>
                    }
    
                </Container>
            )}
        </Dropzone>
    );
}

export default ImgUploadField;