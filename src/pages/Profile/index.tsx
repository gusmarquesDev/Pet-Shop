import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaContainer } from '../../utils/SafeArea'
import theme from '../../theme/theme'
import { FullHeightScrollView } from '../../theme/globalStyles'
import { Content } from '../../utils/Page'
import { Button } from '../../components/Button'
import { apis } from '../../services/api'
import { UsersApi } from '../../services/typesApi'
import { WrapperData } from '../../components/WrapperData';
import { Title } from '../../theme/globalStyles'
import { styles } from './styles'
export interface PropsProfile {
}


const Profile: React.FC<PropsProfile> = () => {

   const [users, setUsers] = useState<UsersApi>();


   const getUsers = async () => {
      try {
         const response = await apis.getUsers()
         const usersData = response.data;
         if (usersData) {
            setUsers(usersData)
         }
      } catch (e) {
         console.warn(e)
      }
   }

   useEffect(() => {
      getUsers()
   }, [])

   return (
      <SafeAreaContainer color={theme.background.bgPrimary}>
         <FullHeightScrollView>
            <Content>
               <View style={styles.viewAvatar}>
                  <Image
                     source={{uri:'https://api.multiavatar.com/Hester%20Vega.png'}}
                     style={{ width: 150, height: 150 }}

                  />
               </View>
               <Title>Meus Dados</Title>
               <View>
                  <WrapperData label='Nome' tittle={users?.name} />
                  <WrapperData label='Sobrenome' tittle={users?.username} />
                  <WrapperData label='E-mail' tittle={users?.email} />
                  <WrapperData label='Telefone' tittle={users?.phone} />
               </View>
               <Button valueButton='Editar Informações' color='#fff' bg='#009CA5' />
               <Button valueButton='Sair' color='#009CA5' bg='transparent' />
            </Content>
         </FullHeightScrollView>
      </SafeAreaContainer>
   )
}

export default Profile;
