import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Form, message, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import * as Api from '../../api';
import Axios from 'axios';

import { useRecoilValue, useRecoilState } from 'recoil';
import { userInfoState, tokenState } from '../../atom';

const { Title } = Typography;
const { TextArea } = Input;

const Private = [
  { value: 0, label: 'Private' },
  { value: 1, label: 'Public' },
];

const Catogory = [
  { value: 0, label: 'Film & Animation' },
  { value: 0, label: 'Autos & Vehicles' },
  { value: 0, label: 'Music' },
  { value: 0, label: 'Pets & Animals' },
  { value: 0, label: 'Sports' },
];

function VideoUploadPage() {
  const user = useRecoilValue(userInfoState);
  const token = useRecoilValue(tokenState);
  useEffect(() => {
    console.log(user);
  }, []);

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState(0);
  const [Categories, setCategories] = useState('Film & Animation');

  const [FilePath, setFilePath] = useState('');
  const [Duration, setDuration] = useState('');
  const [Thumbnail, setThumbnail] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDecsription = (event) => {
    console.log(event.currentTarget.value);

    setDescription(event.currentTarget.value);
  };

  const handleChangeOne = (event) => {
    setPrivacy(event.currentTarget.value);
  };

  const handleChangeTwo = (event) => {
    setCategories(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (user && !token) {
      return alert('Please Log in First');
    }

    if (
      title === '' ||
      Description === '' ||
      Categories === '' ||
      FilePath === '' ||
      Duration === '' ||
      Thumbnail === ''
    ) {
      return alert('Please first fill all the fields');
    }

    const variables = {
      writer: user._id,
      title: title,
      description: Description,
      privacy: privacy,
      filePath: FilePath,
      category: Categories,
      duration: Duration,
      thumbnail: Thumbnail,
    };

    Api.post('video/uploadVideo', variables).then((response) => {
      if (response.data.success) {
        message.success('video Uploaded Successfully');

        // 3초 후 메인페이지로 이동
        setTimeout(() => {
          navigate('/video');
        }, 3000);
      } else {
        alert('비디오 업로드 실패');
      }
    });
  };

  //   const onDrop = async (files) => {
  //     let formData = new FormData();
  //     const config = { header: { 'content-type': 'multipart/form-data' } };
  //     formData.append('file', files[0]);

  //     console.log(files);

  //     try {
  //       const res = await Api.post('video/upload', formData, config);
  //       if (res.data.success) {
  //         console.log('결과', res.data);
  //       } else {
  //         alert('Failed to upload video');
  //       }
  //     } catch (err) {
  //       console.log('failed');
  //     }
  //   };

  const onDrop = (files) => {
    let formData = new FormData();
    const config = { header: { 'content-type': 'multipart/form-data' } };
    formData.append('file', files[0]);

    Axios.post('http://localhost:3001/video/upload', formData, config).then((response) => {
      if (response.data.success) {
        console.log('결과', response.data);

        let variable = {
          url: response.data.url,
          fileName: response.data.fileName,
        };

        setFilePath(response.data.url);

        Axios.post('http://localhost:3001/video/thumbnail', variable).then((response) => {
          if (response.data.success) {
            console.log('썸네일 결과', response.data);
            setDuration(response.data.fileDuration);

            setThumbnail(response.data.url);
          } else {
            alert('썸네일 생성 실패');
          }
        });
      } else {
        alert('failed');
      }
    });
  };
  console.log('FilePath', FilePath);
  console.log('Duration', Duration);
  console.log('Thumbnail', Thumbnail);

  //   const onDrop = (files) => {
  //     let formData = new FormData();
  //     const config = {
  //       header: { 'content-type': 'multipart/form-data' },
  //     };
  //     console.log(files);
  //     formData.append('file', files[0]);

  //     Axios.post('http://localhost:3001/video/upload', formData, config).then((response) => {
  //       if (response.data.success) {
  //         let variable = {
  //           filePath: response.data.filePath,
  //           fileName: response.data.fileName,
  //         };
  //         setFilePath(response.data.filePath);

  //         //gerenate thumbnail with this filepath !

  //         Axios.post('http://localhost:3001/video/thumbnail', variable).then((response) => {
  //           if (response.data.success) {
  //             setDuration(response.data.fileDuration);
  //             setThumbnail(response.data.thumbsFilePath);
  //           } else {
  //             alert('Failed to make the thumbnails');
  //           }
  //         });
  //       } else {
  //         alert('failed to save the video in server');
  //       }
  //     });
  //   };

  //     Api.post('video/upload', formData, config).then((response) => {
  //       if (response.data.success) {
  //         let variable = {
  //           filePath: response.data.filePath,
  //           fileName: response.data.fileName,
  //         };
  //         setFilePath(response.data.filePath);

  //         Api.post('video/thumbnail', variable).then((response) => {
  //           console.log('thumbnail====>', response);
  //           if (response.data.success) {
  //             setDuration(response.data.fileDuration);
  //             setThumbnail(response.data.thumbsFilePath);
  //           } else {
  //             alert('Failed to make the thumbnails');
  //           }
  //         });
  //       } else {
  //         alert('failed to save the video in server');
  //       }
  //     });
  //   };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}> Upload Video</Title>
      </div>

      <Form onSubmit={onSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: '300px',
                  height: '240px',
                  border: '1px solid lightgray',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <PlusOutlined style={{ fontSize: '3rem' }} />
              </div>
            )}
          </Dropzone>

          {Thumbnail && (
            <div>
              <img src={`http://localhost:3001/${Thumbnail}`} alt="Thumbnail" />
            </div>
          )}
        </div>

        <br />
        <br />
        <label>Title</label>
        <Input onChange={handleChangeTitle} value={title} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={handleChangeDecsription} value={Description} />
        <br />
        <br />

        <select onChange={handleChangeOne}>
          {Private.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <select onChange={handleChangeTwo}>
          {Catogory.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
