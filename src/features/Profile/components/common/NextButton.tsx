import Button from '@/components/Button/Button';
import { AccentIcon } from 'public/assets/icons';
import { useTheme } from 'styled-components';

interface Props {
  isValid: boolean;
  onNext: () => void;
}

function NextButton({ isValid, onNext }: Props) {
  const theme = useTheme();

  return (
    <Button
      $style='outlined'
      $size='md'
      $width='full'
      $theme='primary'
      disabled={!isValid}
      onClick={onNext}
    >
      <AccentIcon
        stroke={!isValid ? theme.color.neutral[400] : theme.color.primary[500]}
      />
      다음
      <AccentIcon
        stroke={!isValid ? theme.color.neutral[400] : theme.color.primary[500]}
      />
    </Button>
  );
}

export default NextButton;
