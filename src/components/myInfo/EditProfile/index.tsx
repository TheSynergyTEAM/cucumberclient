import React, { useState, useRef, useContext, useEffect } from 'react'
import {
  StyledContainer,
  SecessionBox,
  Title,
  EditBox,
  EditDetail,
  ImageBox,
  SelectFile
} from './style'
import { Rule } from 'antd/lib/form'
import { Button, Input, Form, Select } from 'antd'
import { PictureOutlined } from '@ant-design/icons'
import userContext from 'context/user'
import { useUserInfo } from 'hooks/useUser'
import { deleteUser } from 'api/auth'
import { useAddrCity } from 'hooks/useAddress'

interface EditProfileProps {
  user: Nullable<User>
}

const EditProfile: React.FC<EditProfileProps> = ({ user }) => {
  const [editMode, setEditMode] = useState(new Array(6).fill(false))
  const editRef = useRef<any>({})
  const { setUser } = useContext(userContext)
  const handleChangeMode = (num: number) => {
    const arr = editMode
    arr[num] = !editMode[num]
    console.log(arr)
    setEditMode([...arr])
  }

  const handleDeleteUser = () => {
    if (user) {
      deleteUser(user.id)
    }
  }
  const { userInfo, requestEditInfo } = useUserInfo(user)

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo)
    }
  }, [userInfo])

  // const halfStyle: () => React.CSSProperties = () => {
  //   const style: React.CSSProperties = {
  //     width: '100%'
  //   }

  //   return style
  // }

  const [parentAddr, setParentAddr] = useState<Nullable<number>>(undefined)
  const { parentAddress, childAddress, childAddrDisabled } = useAddrCity(
    parentAddr
  )
  const handleChangeParentAddr = (value: any) => {
    setParentAddr(value)
  }

  type RuleTarget = 'parentAddr' | 'childAddr'

  type FormRule = {
    [P in RuleTarget]: Rule[]
  }

  // 폼의 룰을 정합니다.
  const formRule: FormRule = {
    // 광역시,도
    parentAddr: [{ required: true, message: '광역시,도를 선택해주세요.' }],
    // 구
    childAddr: [{ required: true, message: '지역을 선택해주세요.' }]
  }

  return (
    <StyledContainer>
      <EditBox>
        <Title>
          <h5>개인정보 수정</h5>
          <p>개인정보를 수정할 수 있어요.</p>
        </Title>
        {userInfo && (
          <>
            <ImageBox>
              <img src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" />
              <SelectFile htmlFor="profile-img">
                <PictureOutlined />
              </SelectFile>
              <input type="file" id="profile-img" />
            </ImageBox>
            <EditDetail>
              <h6>닉네임</h6>
              <div>
                {editMode[0] ? (
                  <>
                    <Input
                      type="text"
                      defaultValue={userInfo.name}
                      onChange={(e) =>
                        (editRef.current = {
                          ...editRef.current,
                          name: e.currentTarget.value
                        })
                      }
                    />
                    <Button
                      onClick={() => {
                        requestEditInfo({ name: editRef.current.name })
                        handleChangeMode(0)
                      }}
                    >
                      완료
                    </Button>
                  </>
                ) : (
                  <>
                    <p>{userInfo.name}</p>
                    <Button onClick={() => handleChangeMode(0)}>수정</Button>
                  </>
                )}
              </div>
            </EditDetail>
            <EditDetail>
              <h6>생년월일</h6>
              <div>
                {editMode[1] ? (
                  <>
                    <Input type="text" defaultValue={userInfo.birthdate} />
                    <Button onClick={() => handleChangeMode(1)}>완료</Button>
                  </>
                ) : (
                  <>
                    <p>{userInfo.birthdate}</p>
                    <Button onClick={() => handleChangeMode(1)}>수정</Button>
                  </>
                )}
              </div>
            </EditDetail>
            <EditDetail>
              <h6>이메일</h6>
              <div>
                {editMode[2] ? (
                  <>
                    <Input
                      type="email"
                      defaultValue={userInfo.email}
                      onChange={(e) =>
                        (editRef.current = {
                          ...editRef.current,
                          email: e.currentTarget.value
                        })
                      }
                    />
                    <Button
                      onClick={() => {
                        handleChangeMode(2)
                        requestEditInfo({ email: editRef.current.email })
                      }}
                    >
                      완료
                    </Button>
                  </>
                ) : (
                  <>
                    <p>{userInfo.email}</p>
                    <Button onClick={() => handleChangeMode(2)}>변경</Button>
                  </>
                )}
              </div>
            </EditDetail>
            <EditDetail>
              <h6>휴대폰</h6>
              <div>
                {editMode[3] ? (
                  <>
                    <Input
                      type="text"
                      defaultValue={userInfo.contact}
                      onChange={(e) =>
                        (editRef.current = {
                          ...editRef.current,
                          contact: e.currentTarget.value
                        })
                      }
                    />
                    <Button
                      onClick={() => {
                        requestEditInfo({ contact: editRef.current.contact })
                        handleChangeMode(3)
                      }}
                    >
                      완료
                    </Button>
                  </>
                ) : (
                  <>
                    <p>{userInfo.contact}</p>
                    <Button onClick={() => handleChangeMode(3)}>변경</Button>
                  </>
                )}
              </div>
            </EditDetail>
            <EditDetail>
              <h6>주소</h6>
              <div>
                {editMode[4] ? (
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      background: 'red'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <Form.Item
                        required
                        name="city"
                        style={{ padding: '0' }}
                        rules={formRule.parentAddr}
                      >
                        <Select
                          placeholder="광역시/도"
                          onChange={handleChangeParentAddr}
                          onSelect={(e: string) => {
                            if (Number(e)) console.log()
                            editRef.current = {
                              ...editRef.current,
                              city: parentAddress[Number(e) - 1].name
                            }
                          }}
                          defaultValue={userInfo.city}
                        >
                          {parentAddress.map((address) => (
                            <Select.Option value={address.id} key={address.id}>
                              {address.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        required
                        name="street1"
                        rules={formRule.childAddr}
                        dependencies={['parentAddress']}
                      >
                        <Select
                          placeholder="구"
                          disabled={childAddrDisabled}
                          defaultValue={userInfo.street1}
                          onSelect={(e) =>
                            (editRef.current = {
                              ...editRef.current,
                              street1: e
                            })
                          }
                        >
                          {childAddress &&
                            childAddress.streetList.map((address) => (
                              <Select.Option key={address} value={address}>
                                {address}
                              </Select.Option>
                            ))}
                        </Select>
                      </Form.Item>
                    </div>
                    <Button
                      onClick={() => {
                        requestEditInfo({
                          city: editRef.current.city,
                          street1: editRef.current.street1
                        })
                        handleChangeMode(4)
                      }}
                    >
                      완료
                    </Button>
                  </div>
                ) : (
                  <>
                    <p>
                      {userInfo.city} {userInfo.street1}
                    </p>
                    <Button onClick={() => handleChangeMode(4)}>변경</Button>
                  </>
                )}
              </div>
            </EditDetail>
            <EditDetail>
              <h6>상세주소</h6>
              <div>
                {editMode[5] ? (
                  <>
                    <Input
                      type="text"
                      defaultValue={userInfo.street2}
                      onChange={(e) =>
                        (editRef.current = {
                          ...editRef.current,
                          street2: e.currentTarget.value
                        })
                      }
                    />
                    <Button
                      onClick={() => {
                        requestEditInfo({ street2: editRef.current.street2 })
                        handleChangeMode(5)
                      }}
                    >
                      완료
                    </Button>
                  </>
                ) : (
                  <>
                    <p>{userInfo.street2}</p>
                    <Button onClick={() => handleChangeMode(5)}>변경</Button>
                  </>
                )}
              </div>
            </EditDetail>
          </>
        )}
      </EditBox>
      <SecessionBox>
        <Title>
          <h5>회원탈퇴</h5>
          <p>회원 탈퇴시, 모든 사용정보가 삭제됩니다.</p>
        </Title>
        <Button type="primary" htmlType="submit" onClick={handleDeleteUser}>
          탈퇴하기
        </Button>
      </SecessionBox>
    </StyledContainer>
  )
}

export default EditProfile
