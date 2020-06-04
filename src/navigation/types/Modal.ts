import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/* Modal Stack Types Begin */
export type ModalStackParamList = {
  CreateIdeaModal: undefined;
  OnboardingStack: undefined;
};

type CreateIdeaModalRouteProp = RouteProp<ModalStackParamList, 'CreateIdeaModal'>;
type CreateIdeaModalNavigationProp = StackNavigationProp<ModalStackParamList, 'CreateIdeaModal'>;

export type CreateIdeaModalProps = {
  route: CreateIdeaModalRouteProp;
  navigation: CreateIdeaModalNavigationProp;
};

/* Modal Stack Types End */


