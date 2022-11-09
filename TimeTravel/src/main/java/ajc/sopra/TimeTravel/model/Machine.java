package ajc.sopra.TimeTravel.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("machine")

public class Machine {
	@JsonView(JsonViews.Common.class)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@JsonView(JsonViews.Common.class)
	@Column(name="DateMachine",nullable = false)
	private LocalDate dateMachine;
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	@Enumerated
	private TypeMachine typeMachine;
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	@Enumerated
	private EtatMachine etatMachine;
	
	public Machine(Integer id, LocalDate dateMachine, TypeMachine typeMachine, EtatMachine etatMachine) {
		this.id = id;
		this.dateMachine = dateMachine;
		this.typeMachine = typeMachine;
		this.etatMachine = etatMachine;
	}
	
	public Machine(LocalDate dateMachine, TypeMachine typeMachine, EtatMachine etatMachine) {
		this.dateMachine = dateMachine;
		this.typeMachine = typeMachine;
		this.etatMachine = etatMachine;
	}
	
	public Machine() {}
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDate getDateMachine() {
		return dateMachine;
	}
	public void setDateMachine(LocalDate dateMachine) {
		this.dateMachine = dateMachine;
	}

	public TypeMachine getTypeMachine() {
		return typeMachine;
	}

	public void setTypeMachine(TypeMachine typeMachine) {
		this.typeMachine = typeMachine;
	}

	public EtatMachine getEtatMachine() {
		return etatMachine;
	}

	public void setEtatMachine(EtatMachine etatMachine) {
		this.etatMachine = etatMachine;
	}

	@Override
	public int hashCode() {
		return Objects.hash(etatMachine);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Machine other = (Machine) obj;
		return etatMachine == other.etatMachine;
	}
	
	

}
