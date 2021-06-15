import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container, ImgUploadedPreviewContainer, SelectFileButton } from './styles';
import plusGrayIcon from '../../../assets/images/icons/plus-gray.svg';


interface IImgUploadFieldProps {
    file: File | undefined;
    setFile(file: File | undefined): void;
    disabled: boolean;
}

const ImgUploadField: React.FC<IImgUploadFieldProps> = ({ file, setFile, disabled }) => {
    const accepetdFileTypes = ['image/jpeg', 'image/png'];
    const [errorMessage, seterrorMessage] = useState('');

    const onDrop = (files: File[]) => {
        (document.getElementById('file-upload-container') as HTMLElement).style.opacity = '1'
        const uploadedFile = files[0];

        if(accepetdFileTypes.includes(uploadedFile.type)) {
            seterrorMessage('');
            setFile(Object.assign(uploadedFile, {
                preview: URL.createObjectURL(uploadedFile)
            }));   
        } else {
            setFile(undefined);
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
                    
                    {   !file &&
                        <>
                            <img src={plusGrayIcon} alt="plus" />
                            <SelectFileButton>Selecione um arquivo</SelectFileButton>
                            <p>Arraste e solte</p>

                            {   errorMessage && 
                                <span className="error">{ errorMessage }</span>

                            }
                        </>
                    }

                    {   file !== undefined &&
                        <>
                            <ImgUploadedPreviewContainer>
                                <div className="img-preview">
                                    <img src={(file as any).preview} alt="img uploaded"/>
                                </div>

                                <p>Arraste e solte, ou clique para substituir</p>
                            </ImgUploadedPreviewContainer>
                            <span className="filename">{file.name}</span>
                        </>
                    }
    
                </Container>
            )}
        </Dropzone>
    );
}

export default ImgUploadField;