package letscode.logistic.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Data
@Entity
public class Mark {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    private String firstname;
    private String lastname;
    private Date date_of_birthday;
    private double height;
    private double width;
    private String rhesus_factor;
    private int blood_type;
    private String diagnosis;
}
