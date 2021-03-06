import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container, ImgUploadedPreviewContainer, SelectFileButton } from './styles';
import plusGrayIcon from '../../../assets/images/icons/plus-gray.svg';
interface IImgUploadFieldProps {
    base64File: string;
    setBase64File(base64File: string): void;
    disabled: boolean;
}

const ImgUploadField: React.FC<IImgUploadFieldProps> = ({ base64File, setBase64File, disabled }) => {
    const accepetdFileTypes = ['image/jpeg', 'image/png'];

    const [errorMessage, seterrorMessage] = useState('');

    const getBase64FromFile = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = error => reject(error);
        });
    }

    const onDrop = (files: File[]) => {
        (document.getElementById('file-upload-container') as HTMLElement).style.opacity = '1'
        const uploadedFile = files[0];

        if(!accepetdFileTypes.includes(uploadedFile.type)) {
            setBase64File('');
            seterrorMessage('Tipos de arquivos permitidos: .png e .jpeg');
        } else if((uploadedFile.size/ 1024 / 1024) > 5) {
            setBase64File('');
            seterrorMessage('O arquivo não pode ser maior do que 5mb');
        } else  {
            seterrorMessage('');
            setBase64File(URL.createObjectURL(uploadedFile));
            getBase64FromFile(uploadedFile).then((base64UploadedFile: unknown) => setBase64File(base64UploadedFile as string));

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
                    
                    {   base64File === '' &&
                        <>
                            <img src={plusGrayIcon} alt="plus" />
                            <SelectFileButton>Selecione um arquivo</SelectFileButton>
                            <p>Arraste e solte</p>

                            {   errorMessage && 
                                <span className="error">{ errorMessage }</span>

                            }
                        </>
                    }

                    {   base64File !== '' &&
                        <>
                            <ImgUploadedPreviewContainer>
                                <div className="img-preview">
                                    <img src={base64File} alt="img uploaded"/>
                                </div>

                                <p>Arraste e solte, ou clique para substituir</p>
                            </ImgUploadedPreviewContainer>
                            {/* <span className="filename">{uploadedFile.name}</span> */}
                        </>
                    }
                </Container>
            )}
        </Dropzone>
    );
}

export default ImgUploadField;