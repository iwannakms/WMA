package letscode.logistic.repo;

import letscode.logistic.domain.Nurse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NurseRepo extends JpaRepository<Nurse, Long> {
}