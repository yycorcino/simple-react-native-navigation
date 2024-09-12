import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'
import Account from '../../components/Account'
import Auth from '../../components/Auth'

export default function Settings() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
          })
      
        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })
    }, []);
    
    return (
        <View>
            {session && session.user ?
                <Account key={session.user.id} session={session} /> 
            :
                <Auth />}
        </View>
    );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
